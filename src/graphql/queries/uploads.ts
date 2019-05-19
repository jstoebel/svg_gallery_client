import gql from 'graphql-tag'

export const GET_IMAGES = gql`
  query GetImages {
    uploads {
      imagePath
      altText
      svg
    }
  }
`

export const UPLOAD_FILE = gql`
  mutation UploadFile($file: Upload!, $altText: String!, $title: String!) {
    uploadFile(file: $file, altText: $altText, title: $title) {
      imagePath
      altText
      svg
    }
  }
`;
