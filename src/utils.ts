import { Document, Packer, Paragraph, HeadingLevel } from "docx"
import { saveAs } from "file-saver"
import { DataType, MimeTypes } from "./components/types"
import { DOC_HEADING, DOC_NAME } from "./constants"

export const getBlob = async (
  doc: Document,
): Promise<Blob | null | undefined> => {
  try {
    const blob = await Packer.toBlob(doc)

    return blob.slice(0, blob.size, MimeTypes.docx)
  } catch (error) {
    console.log(error)
  }
}

const saveDocumentToFile = async (doc: Document, fileName: string) => {
  try {
    const docBlob = await getBlob(doc)

    if (docBlob) {
      saveAs(docBlob, fileName)
    }
  } catch (error) {
    console.log(error)
  }
}

export const createDocument = (data: DataType[]): Document => {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            text: DOC_HEADING,
            heading: HeadingLevel.HEADING_1,
          }),
          ...data
            .filter(({ name, value }: any) => name && value)
            .map(
              ({ name, value }: any) =>
                new Paragraph({
                  text: `${name} - ${value}`,
                }),
            ),
        ],
      },
    ],
  })

  return doc
}

export const generateWordDocument = (data: DataType[]) => {
  const doc = createDocument(data)

  saveDocumentToFile(doc, DOC_NAME)
}
