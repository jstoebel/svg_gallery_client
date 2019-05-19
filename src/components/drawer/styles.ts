import styled from 'styled-components'

export const drawerContents = styled.div`
  width: 600px;
`

export const fileInput = styled.input`
  display: none;
  margin: 5px;
`

export const previewImage = styled.img`
  display: block;
  max-width: 200px;
  margin: 10px;
`

export const uploadButton = styled.label.attrs({
  htmlFor: 'fileUpload'
})`
  margin: 5px;
  padding-left: 10px;

`

export const previewImageSlot = styled.div`
  max-width: 200px;
  height: 250px;
  margin: 10px;
`