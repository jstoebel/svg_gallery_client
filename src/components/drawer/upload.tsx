import React, {useState} from 'react'
import { Mutation } from 'react-apollo'
import { UPLOAD_FILE } from '../../graphql/queries/uploads'
import { UploadFile, UploadFileVariables } from '../../graphql/types/UploadFile'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import * as css from './styles'

interface UploadI {
  file: File | null
  data: string
}

const UploadForm: React.SFC = () => {
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
    // close the drawer
  }

  const handleUploadDone = (cache, {data: {addPhoto}}) => {

  }

  return (
    <Mutation<UploadFile, UploadFileVariables>
      mutation={UPLOAD_FILE}
      update={handleUploadDone}
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
          color='default' 
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