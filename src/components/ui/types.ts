export interface IButtonProps {
  label: string
  onClick: () => void
  className: string
}

export interface ITextFieldProps {
  value: string
  valueKey: string
  placeholder: string
  label: string
  onChange: (newValue: string, valueKey: string) => void
}
