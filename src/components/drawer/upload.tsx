import React, {useState, FormEvent} from 'react'
import { Mutation, FetchResult } from 'react-apollo'
import { UPLOAD_FILE } from '../../graphql/queries/uploads'
import { UploadFile, UploadFileVariables } from '../../graphql/types/UploadFile'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import * as css from './styles'
import TextField from './textField'
import Formsy from 'formsy-react';
import {DataProxy} from 'apollo-cache'
import {GET_IMAGES} from '../../graphql/queries/uploads'
import {GetImages, GetImages_uploads} from '../../graphql/types/GetImages'

interface UploadFormI {
  closeDrawer: () => void
}

interface UploadI {
  file: File | null
  data: string
}

interface TextFieldsI {
  title: string,
  altText: string,
  [index:string]: string
}

const UploadForm: React.SFC<UploadFormI> = ({closeDrawer}) => {
  const [upload, setUpload] = useState<UploadI>({
    file: null,
    data: '',
  })

  const [textFields, setTextFields] = useState<TextFieldsI>({
    title: '',
    altText: ''
  })

  const [validInputs, setValidInputs] = useState(false)

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

  const handleFormSubmit = (uploadFile: Function, data: TextFieldsI) => {
    console.log('hello from upload button', data);
    const {altText, title} = data;
    uploadFile({ 
      variables: { 
        file: upload.file,
        altText,
        title,
      } 
    })
    console.log('done with handleFormSubmit');
    
  }

  const handleFormChange = (e: FormEvent<HTMLInputElement>) => {
    const newState = {...textFields}
    newState[e.currentTarget.name] = e.currentTarget.value;
    setTextFields(newState);
  }
  const handleUploadDone = () => {
    closeDrawer()
  }

  function updateCache(cache: DataProxy, result: FetchResult<{uploadFile: GetImages_uploads}>): void {
    console.log('hello from updateCache');
    console.log(cache);
    console.log(result);
    
    const data = result.data!
    const currentUploadData = cache.readQuery<GetImages>({ query: GET_IMAGES})
    const uploads = (currentUploadData && currentUploadData!.uploads) || []
    cache.writeQuery({
      query: GET_IMAGES,
      data: { uploads: uploads.concat([data.uploadFile]) }
    })

    console.log('cache updated!');
    
  }

  const changeValidInputs = (validInputs: boolean) => () => setValidInputs(validInputs)
  const formValid = validInputs && Boolean(upload.data)

  return (
    <Mutation<UploadFile, UploadFileVariables>
      mutation={UPLOAD_FILE}
      onCompleted={handleUploadDone}
      update={updateCache}
    >
      {uploadFile => (
        <Formsy<TextFieldsI> onValidSubmit={(data) => handleFormSubmit(uploadFile, data) } onValid={changeValidInputs(true)} onInvalid={changeValidInputs(false)}>
          <TextField
            label="Title"
            name="title"
            required
          />
          <TextField
            label="Alt Text"
            name="altText"
            required
          />
          <css.fileInput
            accept="image/*"
            type="file"
            id="fileUpload"
            required
            onChange={ (e) => handleImageChange(e.target.files) }
          />
          <css.uploadButton>
            <Button variant="contained" component="span">
              Select a file
            </Button>
          </css.uploadButton>
          
          <Button
            variant='contained'
            color='primary'
            type='submit'
            disabled={!formValid}
          >
            Upload
            <CloudUploadIcon />
          </Button>
          {upload.data && <css.previewImage src={upload.data} alt="" /> || <css.previewImageSlot />}
        </Formsy>
      )}
    </Mutation>
  );
}

export default UploadForm;