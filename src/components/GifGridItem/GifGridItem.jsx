import React from 'react'
import './GifGridItem.css'

const GifGridItem = ({title,url}) => {


  return (
    <li className='cardItem'>
     <img src={url} alt="..." />
        <p>{title}</p>
        
    </li>
  )
}

export default GifGridItem
