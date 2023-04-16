import { memo, useCallback, useEffect, useState, FC } from "react"
import { ITextFieldProps } from "./types"

const TextField: FC<ITextFieldProps> = props => {
  const { value: propsValue, valueKey, placeholder, onChange, label } = props

  const [inputValue, setInputValue] = useState(propsValue)

  const handleInputChange = useCallback((e: any) => {
    setInputValue(e.target.value)
  }, [])

  const handleChange = useCallback(() => {
    if (inputValue === propsValue) return

    onChange(inputValue, valueKey)
  }, [inputValue, onChange, propsValue, valueKey])

  useEffect(() => {
    setInputValue(propsValue)
  }, [propsValue])

  return (
    <>
      <label htmlFor="floatingInputGrid">{label}</label>
      <input
        type="text"
        className="form-control"
        id="floatingInputGrid"
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        onBlur={handleChange}
      />
    </>
  )
}

const MemoizedTextField = memo(TextField)
export { MemoizedTextField as TextField }
