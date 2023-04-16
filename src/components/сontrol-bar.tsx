import React, { memo, useCallback, useState, FC } from "react"
import { Button } from "./ui"
import ModalInfo from "./modal"
import { IControlBarProps } from "./types"

const ControlBar: FC<IControlBarProps> = props => {
  const { handleAddItem, handleRemoveItem, handleGenerate, data } = props

  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const handleCloseModal = useCallback(() => {
    setIsVisibleModal(false)
  }, [])

  const handleShowModal = useCallback(() => {
    setIsVisibleModal(true)
  }, [])

  return (
    <>
      <ModalInfo
        data={data}
        isVisibleModal={isVisibleModal}
        handleCloseModal={handleCloseModal}
      />
      <div className="container h-30">
        <div className="row g-2 py-4 row justify-content-between">
          <div className="col-sm-3">
            <Button
              className="btn btn-outline-secondary"
              onClick={handleAddItem}
              label="Добавить переменную"
            />
          </div>
          <div className="col-sm-3">
            <Button
              className="btn btn-outline-secondary"
              onClick={handleRemoveItem}
              label="Удалить переменную"
            />
          </div>
          <div className="col-sm-3">
            <Button
              className="btn btn-outline-secondary"
              onClick={handleShowModal}
              label="Просмотр"
            />
          </div>
          <div className="col-sm-3">
            <Button
              className="btn btn-outline-primary"
              onClick={handleGenerate}
              label="Получить файл"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(ControlBar)
