import React, { useState } from 'react';
import * as css from './styles'
import {GetImages_uploads} from '../../graphql/types/GetImages'

interface Props {
  image: GetImages_uploads
}

export default ({image}: Props) => {
  console.log('rendering an image', image);
  
  const [showSvg, setShowSvg] = useState(true)
  const [showImg, setShowImg] = useState(true)
  const svg = image.svg || ''

  const handleImageLoaded = () => {
    console.log('image loaded!');
    setShowSvg(false)
  }
  
  const handleImageError = () => {
    console.log('error loading image!');
    // setShowImg(false)
  }
  console.log(process.env);
  
  const fullImagePath = `${process.env.REACT_APP_API_ROOT}/${image.imagePath}`
  return (
    <div>
      {showSvg && <css.img src={svg}/> }
      {showImg && <css.img 
        src={fullImagePath}
        onLoad={handleImageLoaded}
        onError={handleImageError}
      />}
    </div>
  )
}