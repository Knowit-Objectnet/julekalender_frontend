import clsx, { ClassValue } from "clsx"
import { format } from "date-fns"
import { nb } from "date-fns/locale"
import { find, isArray, isEmpty, isFunction, isNil, isPlainObject, isString, memoize, padStart, replace, toString, trim } from "lodash-es"
import { twMerge } from "tailwind-merge"

import { Maybe, Nullable } from "../types/utils_types"

import { getAnchorVar } from "./hooks/useStoreAnchorVars"


export const NBSP = "\u00a0"
export const getTimestamp = (dateString: string) => format(new Date(dateString), `dd.MM'${NBSP}kl${NBSP}'HH:mm`)
export const getTimestampForInputField = (dateString: string) => format(new Date(dateString), "yyyy-MM-dd'T'kk:mm")

export const getActiveYear = () => {
  const date = new Date()
  const year = date.getFullYear()

  const activeYearOverride = getAnchorVar("year")
  if (activeYearOverride)
    return activeYearOverride

  // Active year rolls into February
  if (date.getMonth() < 2)
    return year - 1

  return year
}
export const getDefaultActiveFrom = (door: number) => `${getActiveYear()}-12-${padStart(toString(door), 2, "0")}T04:00+0100`
export const getDefaultActiveTo = () => `${getActiveYear()}-12-26T04:00+0100`
export const getRaffleStart = () => new Date(`${getActiveYear()}-12-01T04:00+0100`)
export const getRaffleEnd = () => new Date(`${getActiveYear()}-12-26T04:00+0100`)

const DATE_FORMATS = {
  standard: "do MMMM p",
  long: "'kl.' p 'den' do MMMM",
  short: "dd.MM HH:mm"
} as const
export const dateFormat = (date: Date, fmt: keyof typeof DATE_FORMATS = "standard") => format(date, DATE_FORMATS[fmt], { locale: nb })

export const squish = (str: string) => replace(trim(str), /\s+/g, " ")

// Easing helpers (https://easings.net)
export const easeInCubic = [.32, 0, .67, 0]
export const easeOutCubic = [.33, 1, .68, 1]
export const easeInOutCubic = [.65, 0, .35, 1]


const TENS = [
  [90, "nitti"],
  [80, "åtti"],
  [70, "sytti"],
  [60, "seksti"],
  [50, "femti"],
  [40, "førti"],
  [30, "tretti"],
  [20, "tjue"]
] as const
const lowNumbers = memoize((neutral: boolean) => [
  "null", neutral ? "ett" : "en", "to", "tre", "fire", "fem", "seks", "syv", "åtte", "ni",
  "ti", "elleve", "tolv", "tretten", "fjorten", "femten", "seksten", "sytten", "atten", "nitten"
])

// Generates a nice-ish Norwegian number string from given number `n`.
// Is it ugly? Yes. Is it strictly needed? Probably not. Can you do better? Submit a pull request :)
export const numberString = (n: number, neutral = false): string => {
  let str = ""
  let and = false

  if (n < 0) {
    str = "minus"
    n = -n
  }

  do {
    // 1000 <= n < 1100, 1300 <= n
    // Tusen og x, elleve hundre og x, ett tusen tre hundre og x, to tusen ...
    if (n >= 1300 || (n >= 1000 && n < 1100)) {
      const thousands = Math.floor(n / 1000)
      const s = n > 1100 ? `${numberString(thousands, true)} tusen` : "tusen"
      str += isEmpty(str) ? s : ` ${s}`
      n -= thousands * 1000
      and = true
      continue
    }

    // 100 <= n < 1000, 1100 <= n < 1300
    // Hundre og x, tolv hundre og x
    if (n >= 100) {
      const hundreds = Math.floor(n / 100)
      const s = hundreds >= 2 ? `${numberString(hundreds, true)} hundre` : "hundre"
      str += isEmpty(str) ? s : ` ${s}`
      n -= hundreds * 100
      and = true
      continue
    }

    // 20 <= n < 100
    const [limit, ten] = find(TENS, ([limit]) => n >= limit) ?? []
    if (limit && ten) {
      str += isEmpty(str) || !and ? ten : ` og ${ten}`
      n -= limit
      and = false
      continue
    }

    // n < 20
    const low = lowNumbers(neutral && isEmpty(str))[n]
    if (low) return str + (isEmpty(str) || !and ? low : ` og ${low}`)
  } while (n > 0)

  return str
}

const RANDOM_NAMES = [
  ["Ukjent snilt barn", "🧒"],
  ["Ukjent nissefar", "🎅"],
  ["Ukjent nissemor", "🧑‍🎄"],
  ["Ukjent alv", "🧝‍♀️"],
  ["Ukjent reinsdyr", "🦌"],
  ["Ukjent uåpnet pakke", "🎁"],
  ["Ukjent juletre", "🎄"]
]

export const getRandomDisplayName = () => RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)]

// Weakmap to hold unique references to objects for use with React's required
// `key` props for mapping in JSX. Weakmap holds WEAK references to its keys,
// thus will not prevent garbage collection.
const keyMap = new WeakMap<object, number>()
let keyId = 0

// Get a unique key for an object. Use this when you need a key for a JSX map
// and there is no easy way to generate a string|number key for the object.
export const getObjKey = (obj: object) => {
  let key = keyMap.get(obj)
  if (key !== undefined) return key

  key = keyId++
  keyMap.set(obj, key)

  return key
}

export const isPresent = <T>(value: T): value is NonNullable<T> => {
  if (isString(value))
    return trim(value).length > 0

  if (isArray(value)) {
    return !isEmpty(value)
  }

  if (isPlainObject(value)) {
    return !isEmpty(value)
  }

  return !isNil(value)
}

export const isBlank = <T>(value: T) => !isPresent(value)

export const presence = <T>(value: T) => isPresent(value) ? value : undefined

/**
 * Checks that given value is "present" (see `isPresent`), and conditionally
 * returns value of calling the given function. If a second function is
 * provided, the value of calling that function is returned should the given
 * value not be present.
 */
export function guardPresent<T, TPresentReturn>(value: Nullable<Maybe<T>>, presentFunc: (value: T) => TPresentReturn): Maybe<TPresentReturn>
export function guardPresent<T, TPresentReturn, TNotPresentReturn>(value: Nullable<Maybe<T>>, presentFunc: (value: T) => TPresentReturn, notPresentFuncOrValue: (value: Nullable<Maybe<T>>) => TNotPresentReturn): TPresentReturn | TNotPresentReturn
export function guardPresent<T, TPresentReturn, TNotPresentReturn>(value: Nullable<Maybe<T>>, presentFunc: (value: T) => TPresentReturn, notPresentFuncOrValue: TNotPresentReturn): TPresentReturn | TNotPresentReturn
export function guardPresent<T, TPresentReturn, TNotPresentReturn>(
  value: Nullable<Maybe<T>>,
  presentFunc: (v: T) => TPresentReturn,
  notPresentFuncOrValue?: ((v: Nullable<Maybe<T>>) => TNotPresentReturn) | TNotPresentReturn
): TPresentReturn | TNotPresentReturn | undefined {
  if (isPresent(value))
    return presentFunc(value)

  if (!isNil(notPresentFuncOrValue))
    return isFunction(notPresentFuncOrValue) ? notPresentFuncOrValue(value) : notPresentFuncOrValue

  return undefined
}


// Replacement for clsx that also lets you overwrite tailwind values. The latest
// tailwind utility in the resulting classes string will take effect.
export const cl = (...classes: ClassValue[]) => twMerge(clsx(classes))
