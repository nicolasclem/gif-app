import React, { useState, useEffect } from 'react'
import  {getGif } from '../../helpers/getGifs'
import GifGridItem from '../GifGridItem/GifGridItem'
import './GifGrid.css'
const GifGrid = ({category}) => {


    const [images, setImages] = useState([])

    useEffect(()=>{
      getGif(category).then(setImages)
    },[category])

   


   
  return (
    <div className='card-grid'>
        
        <ul>
            {
                images.map((img) => 
                   <GifGridItem  
                   key={img.id}
                   {...img}
                   />
                )
            }
           
        </ul>
        
    </div>
  )
}

export default GifGrid