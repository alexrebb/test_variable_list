import { memo, useEffect, useState, FC, useCallback } from "react"

import { Modal } from "react-bootstrap"
import { Button } from "./ui/button"

import { createDocument, getBlob } from "../utils"

import FileViewer from "react-file-viewer"

import { IModalProps } from "./types"

const ModalInfo: FC<IModalProps> = props => {
  const { data, isVisibleModal, handleCloseModal } = props

  const [urlFile, setFileURL] = useState("")

  const generateFileURL = useCallback(async () => {
    const doc = createDocument(data)

    try {
      const docBlob = await getBlob(doc)

      if (docBlob) {
        setFileURL(URL.createObjectURL(docBlob))
      }
    } catch (error) {
      console.log(error)
    }
  }, [data])

  useEffect(() => {
    generateFileURL()
  }, [generateFileURL])

  return (
    <Modal size="lg" show={isVisibleModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Предварительный просмотр</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {urlFile && <FileViewer fileType="docx" filePath={urlFile} />}
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-outline-primary"
          onClick={handleCloseModal}
          label="Закрыть"
        />
      </Modal.Footer>
    </Modal>
  )
}

export default memo(ModalInfo)
