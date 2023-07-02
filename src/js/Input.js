import React from 'react'
import "../css/Input.css"

export const Input = ({element,setElement,handlesubmit}) => {
  return (
    <form className='input' action ="" onSubmit={handlesubmit}>
        <input
        type='text'
        required
        placeholder='add iteams'
        autoFocus
        value={element}
        onChange={(e) => setElement(e.target.value)}
        />
        <button type='submit' className='but'><i class="far fa-plus-square"></i></button>
    </form>
  )
}
