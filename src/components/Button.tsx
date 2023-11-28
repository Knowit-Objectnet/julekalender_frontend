import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react"

import { cl } from "../utils"
import { Nullable } from "../../types/utils_types"

import Icon, { IconProps } from "./Icons/Icon"

type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export type ButtonProps = Omit<HTMLButtonProps, "content"> & {
  content?: ReactNode
  disabled?: boolean
  sm?: boolean
  primary?: boolean
  icon?: Nullable<IconProps["name"]>
  className?: string
}

const Button: FC<ButtonProps> = ({
  content,
  disabled,
  sm = false,
  primary = false,
  icon,
  children,
  className,
  type = "button",
  ...restProps
}) => (
  <button
    className={cl(
      `
        bg-purple-700

        px-12
        py-3
        inline-flex
        gap-2

        rounded-full

        font-bold
        whitespace-nowrap
        align-middle
      `,
      !disabled &&
        `
        hover:bg-purple-900
        hover:ring
        hover:ring-inset
        hover:ring-purple-700

        active:bg-purple-500

        focus:outline-none
        focus:ring
        focus:ring-inset
        focus:ring-purple-100
      `,
      disabled &&
        `
        text-white/30
      `,
      sm &&
        `
        sm:text-sm
        px-8
        py-2
        gap-3
      `,
      { "bg-purple-600": primary },
      className
    )}
    disabled={disabled}
    type={type}
    {...restProps}
  >
    {icon && <Icon name={icon} sm={sm} className={cl(sm && "w-10 h-10")} />}
    {content ?? children}
  </button>
)

export default Button
