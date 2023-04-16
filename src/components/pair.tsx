import { useCallback, FC } from "react"
import { TextField } from "./ui"
import { IPairProps } from "./types"
import { PLACEHOLDER, VALUE_LABEL, VAR_LABEL } from "../constants"

const Pair: FC<IPairProps> = props => {
  const { data, pairIndex, onChange } = props

  const handleChange = useCallback(
    (newValue: string, valueKey: string) => {
      onChange(newValue, valueKey, pairIndex)
    },
    [onChange, pairIndex],
  )

  return (
    <div className="col-12">
      <div className="row g-2 py-2">
        <div className="col-sm-5">
          <TextField
            value={data.name}
            label={VAR_LABEL}
            placeholder={PLACEHOLDER}
            onChange={handleChange}
            valueKey="name"
          />
        </div>
        <div className="col-sm-7">
          <TextField
            value={data.value}
            label={VALUE_LABEL}
            placeholder={PLACEHOLDER}
            onChange={handleChange}
            valueKey="value"
          />
        </div>
      </div>
    </div>
  )
}

export { Pair }
