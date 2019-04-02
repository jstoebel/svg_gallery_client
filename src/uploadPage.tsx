import Page from './components/Page'
import Section from './components/Section'
import UploadBlob from './components/UploadBlob'
import UploadFile from './components/UploadFile'
import UploadFileList from './components/UploadFileList'
import Uploads from './components/Uploads'

const IndexPage = () => (
  <div>
  <h1 title="Apollo upload examples" />
    <Section heading="Upload FileList">
      <UploadFileList />
    </Section>
    <Section heading="Upload File">
      <UploadFile />
    </Section>
    <Section heading="Upload Blob">
      <UploadBlob />
    </Section>
    <Section heading="Uploads">
      <Uploads />
    </Section>
  </div>
)

export default IndexPage
