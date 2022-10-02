import React from 'react'

export const GifItem = ({title, url}) => {
  // console.log('imagen',props)
  return (
  <div className='card'>
    <img src={url} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt={title}/>
    <p>{title}</p>
  </div>
  )
  
  
}
