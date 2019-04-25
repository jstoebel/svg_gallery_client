import * as React from 'react'
import * as css from './styles'
interface Props {
  image: any
}

export default ({image}: Props) => {
  return(
    <div>
      <h2>{image.altText}</h2>
      <css.img>
        <img src={image.svg} alt=""/>
      </css.img>
    </div>
  )
}