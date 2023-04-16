import { memo, FC } from "react"
import { IButtonProps } from "./types"

const Button: FC<IButtonProps> = props => {
  const { label, onClick, className } = props

  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  )
}

const MemoizedButton = memo(Button)
export { MemoizedButton as Button }
