import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import uploadsQuery from '../queries/uploads'

const UploadFile = ({ mutate }: any) => {
  const handleChange = ({
    target: {
      validity,
      files: [file]
    }
  }: any) =>
    validity.valid &&
    mutate({
      variables: { file },
      update(
        proxy: any,
        {
          data: { singleUpload }
        }: any
      ) {
        const data = proxy.readQuery({ query: uploadsQuery })
        data.uploads.push(singleUpload)
        proxy.writeQuery({ query: uploadsQuery, data })
      }
    })

  return <input type="file" required onChange={handleChange} />
}

export default graphql(gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      id
      filename
      mimetype
      path
    }
  }
`)(UploadFile)
