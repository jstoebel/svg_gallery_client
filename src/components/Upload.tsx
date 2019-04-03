import * as React from 'react'
import { Mutation } from 'react-apollo'
import { UPLOAD_FILE } from '../graphql/queries/uploads'

const Upload: React.SFC = () => {
  return (
    <Mutation mutation={UPLOAD_FILE}>
      {uploadFile => (
        <input
        type="file"
        required
        onChange={({ target: { validity, files: [file] } }) =>
          validity.valid && uploadFile({ variables: { file } })
        }
       />
      )}
    </Mutation>
  );
}

export default Upload;