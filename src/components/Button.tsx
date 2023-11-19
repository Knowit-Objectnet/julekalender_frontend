import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react"
import clsx from "clsx"


type HTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonProps = Omit<HTMLButtonProps, "content"> & {
  underline?: boolean
  content?: ReactNode
  disabled?: boolean
  sm?: boolean
}

const Button: FC<ButtonProps> = ({
  underline = true,
  content,
  disabled,
  sm = false,
  children,
  className,
  ...restProps
}) => (
  <button
    className={clsx(
      underline && "hover:underline",
      "uppercase sm:tracking-wider text-sm whitespace-nowrap",
      sm ? "sm:text-base" : "sm:text-lg",
      disabled && "text-opacity-30",
      className
    )}
    disabled={disabled}
    {...restProps}
  >
    {content ?? children}
  </button>
)

export default Button
