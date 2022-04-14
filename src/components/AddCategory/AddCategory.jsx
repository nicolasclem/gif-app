import React, { useState } from 'react'
import PropTypes from 'prop-types'
import"./AddCategory.css"

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(inputValue.trim().length >3){
        setCategories( cats=>[...cats ,inputValue]);
        setInputValue("")
        }else{
            console.log("enviar datos");
        }
    }
   
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
        </form>
    </div>
  )
}

AddCategory.propType = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory