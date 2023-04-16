import { useCallback, useState } from "react"
import { Pair } from "./pair"
import ControlBar from "./сontrol-bar"

import { set, cloneDeep } from "lodash"
import { v4 as uuid } from "uuid"

import { generateWordDocument } from "../utils"

import { DEFAULT_CONFIG, DEFAULT_PAIR } from "../constants"
import { DataType } from "./types"

const Form = () => {
  const [data, setData] = useState<DataType[]>(DEFAULT_CONFIG)

  const handleDataChange = useCallback(
    (newValue: string, valueKey: string, index: number) => {
      setData((prev: DataType[]) =>
        set(cloneDeep(prev), `[${index}]${valueKey}`, newValue),
      )
    },
    [],
  )

  const handleAddItem = useCallback(() => {
    setData((prev: DataType[]) =>
      set(cloneDeep(prev), `[${data.length}]`, { ...DEFAULT_PAIR, id: uuid() }),
    )
  }, [data.length])

  const handleRemoveItem = useCallback(() => {
    if (data.length === 1) return

    setData((prev: DataType[]) => {
      const newData = cloneDeep(prev)

      const lastItemIndex = newData.length - 1

      newData.splice(lastItemIndex, 1)

      return newData
    })
  }, [data])

  const handleGenerate = useCallback(() => {
    generateWordDocument(data)
  }, [data])

  return (
    <div style={{ height: "100vh" }}>
      <div className="container h-50 overflow-auto">
        <h2>Исходный документ</h2>
        <div className="row ">
          {data.map((item: DataType, index: number) => (
            <Pair
              key={item.id}
              data={item}
              pairIndex={index}
              onChange={handleDataChange}
            />
          ))}
        </div>
      </div>
      <ControlBar
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        handleGenerate={handleGenerate}
        data={data}
      />
    </div>
  )
}

export { Form }
