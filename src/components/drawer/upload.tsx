import React, {useState} from 'react'
import { Mutation } from 'react-apollo'

import { UPLOAD_FILE } from '../../graphql/queries/uploads'
import { UploadFile, UploadFileVariables } from '../../graphql/types/UploadFile'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import * as css from './styles'

interface UploadFormI {
  closeDrawer: () => void
}

interface UploadI {
  file: File | null
  data: string
}
const UploadForm: React.SFC<UploadFormI> = ({closeDrawer}) => {
  const [upload, setUpload] = useState<UploadI>({file: null, data: ''})

  const handleImageChange = (files: FileList | null) => {
    const [file] = files

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setUpload({
          file,
          data: reader.result as string
        })
      }

      reader.onerror = (e) => {
        // couldn't load the file for some reason
        setUpload({
          file,
          data: ''
        })
      }
      reader.readAsDataURL(file)
    } else {
      // no actual file!
      setUpload({
        file: null,
        data: ''
      })
    }
  }

  const handleFormSubmit = (e: React.SyntheticEvent, uploadFile: Function) => {
    console.log('hello from upload button');
    uploadFile({ variables: { file: upload.file } })
    closeDrawer()
    // close the drawer
  }

  const handleUploadDone = () => {
    // close the drawer
    // Update the gallery with new image? I think a new query is needed for that since we need data generated on the server (such as the svg). Maybe images should use sub/pub
  }

  return (
    <Mutation<UploadFile, UploadFileVariables>
      mutation={UPLOAD_FILE}
      onCompleted={handleUploadDone}
    >
      {uploadFile => (
        <form>
          <css.fileInput
            accept="image/*"
            type="file"
            id="fileUpload"
            required
            onChange={ (e) => handleImageChange(e.target.files) }
          />
          <label htmlFor="fileUpload">
            <Button variant="contained" component="span">
              Select a file
            </Button>
          </label>
          {upload.data && <css.previewImage src={upload.data} alt=""/>}
          { upload.file && <Button
          variant='contained'
          color='primary' 
          onClick={(e) => {handleFormSubmit(e, uploadFile)}}
          >
            Upload
            <CloudUploadIcon />
          </Button>
          }
        </form>
      )}
    </Mutation>
  );
}

export default UploadForm;