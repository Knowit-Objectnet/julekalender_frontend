import { FC, useContext, useEffect, useState } from "react"

import CheckMark from "../checkmarks/CheckMark"
import WrongMark from "../checkmarks/WrongMark"
import { AuthContext } from "../../AuthContext"
import { useCreateSolution } from "../../api/requests"
import useIsDoorSolved from "../../hooks/useIsDoorSolved"
import WaitMark from "../checkmarks/WaitMark"
import { cl } from "../../utils"
import Icon from "../Icons/Icon"


type InputProps = {
  door: number
}

const Input: FC<InputProps> = ({ door }) => {
  const { isAuthenticated } = useContext(AuthContext)

  const [attemptCount, setAttemptCount] = useState(0)
  const [answer, setAnswer] = useState("")
  const [dirty, setDirty] = useState(false)
  const isDoorSolved = useIsDoorSolved(door)

  const { mutate: createSolution, isLoading, error, reset } = useCreateSolution()
  const [rateLimitTimeout, setRateLimitTimeout] = useState(0)
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined

    if (error && error.status === 429 && error.headers && error.headers["retry-after"]) {
      const retryAfter = parseInt(error.headers["retry-after"])

      setRateLimitTimeout(retryAfter)
      timeout = setTimeout(() => {
        setRateLimitTimeout(0)
        setAttemptCount(0)
        reset()
      }, retryAfter * 1000)
    }

    return () => timeout && clearTimeout(timeout)
  }, [error, setRateLimitTimeout, setAttemptCount, reset])

  const submitAnswer = () => {
    createSolution({ door, answer })
    setDirty(false)
    setAttemptCount((count) => count + 1)
  }

  const isWrongAnswer = !isDoorSolved && attemptCount > 0 && !isLoading && !dirty

  if (!isDoorSolved && !isAuthenticated) return <p>Logg inn for å delta!</p>

  if (isDoorSolved) {
    return (
      <CheckMark
        wrapperClassName="w-32 md:w-56 mx-auto"
        message={`Bra jobba!${door === 24 ? " Og god jul! 🥳" : ""}`}
        scrollTo={attemptCount > 0}
      />
    )
  }

  // Rate limit exceeded
  if (rateLimitTimeout > 0 && error) {
    return (
      <WaitMark
        wrapperClassName="w-96 mx-auto"
        className="w-32 md:w-56"
        message={error.message}
        retryAfter={rateLimitTimeout}
        scrollTo
      />
    )
  }

  return (
    <>
      <div
        className="relative flex items-center">
        <input
          className={cl("form-input pr-22 w-full rounded-xl border-purple-500 bg-transparent border-2 placeholder:text-purple-400 placeholder:font-bold font-bold", { "text-red-700": isWrongAnswer })}
          placeholder="Ditt svar:"
          value={answer}
          maxLength={128}
          onChange={(e) => {
            setAnswer(e.target.value)
            setDirty(true)
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              submitAnswer()
            }
          }}
        />

        {answer && <Icon name="send" className="absolute right-6 child:top-0 child:left-0" onClick={() => submitAnswer()} />}
      </div>

      <div className="w-full text-center text-sm">Når du har løst oppgaven kan du se kommentarfeltet!</div>

      {(isWrongAnswer || error) && (
        <WrongMark
          wrapperClassName="w-32 md:w-56 mx-auto mt-16"
          message={error?.message ?? "Feil svar!"}
          scrollTo
        />
      )}
    </>
  )
}

export default Input
