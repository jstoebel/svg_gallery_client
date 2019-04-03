import gql from 'graphql-tag'

export const UPLOADS = gql`
  query uploads {
    uploads {
      id
      filename
      mimetype
      path
    }
  }
`

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      filename
    }
  }
`;
