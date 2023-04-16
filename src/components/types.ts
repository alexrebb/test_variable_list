export enum MimeTypes {
  docx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
}

export type DataType = {
  name: string
  value: string
  id: string
}

export interface IPairProps {
  data: DataType
  pairIndex: number
  onChange: (newValue: string, valueKey: string, pairIndex: number) => void
}

export interface IModalProps {
  data: DataType[]
  isVisibleModal: boolean
  handleCloseModal: () => void
}

export interface IControlBarProps {
  data: DataType[]
  handleAddItem: () => void
  handleRemoveItem: () => void
  handleGenerate: () => void
}
