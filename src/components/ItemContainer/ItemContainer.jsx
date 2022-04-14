import React, { useState } from 'react'
import AddCategory from '../AddCategory/AddCategory'
import GifGrid from '../GifGrid/GifGrid'

import './ItemContainer.css'

const ItemContainer = () => {

    const [categories, setCategories] = useState(["one Punch"])
 

 
 
    return (
    <div>
        <h2> GIF-APP</h2>
        <AddCategory setCategories={setCategories}  />
        <hr />
    
        <ul>
            {categories.map(category=>
                    <GifGrid  
                    key={category}
                    category={category}
                    />
            )}
        </ul>



    </div>
  )
}

export default ItemContainer