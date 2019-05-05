import React, { useState } from 'react';
import * as css from './styles'
import {GetImages_uploads} from '../../graphql/types/GetImages'

interface Props {
  image: GetImages_uploads
}

export default ({image}: Props) => {
  
  const [showSvg, setShowSvg] = useState(true)
  const [showImg, setShowImg] = useState(true)
  const svg = image.svg || ''

  const handleImageLoad = () => {
    setShowSvg(false)
  }
  
  const handleImageError = () => {
    console.log('error loading image!');
    setShowImg(false)
  }

  const fullImagePath = `${process.env.REACT_APP_MEDIA_ROOT}/${image.imagePath}`
  return (
    <div>
      {showSvg && <css.img src={svg}/> }
      {showImg && <css.img 
        src={fullImagePath}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />}
    </div>
  )
}