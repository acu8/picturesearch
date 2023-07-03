import React from 'react'
import ImageShow from './ImageShow'
import './imageList.css'

export default function ImageList({ images }) {
  const renderedImage = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return (
    <div className='image-list'>{renderedImage}</div>
  )
}
