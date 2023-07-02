import React from 'react'
import "../css/Itemid.css"
export const Itemid = ({item,handlechange,handledelete}) => {
  return (
    <li className='item'>
          <input className='box'
        type='checkbox'
        onChange={()=>handlechange(item.id)}
        checked = {item.checked}
          />
        <label>{item.element}</label>
        <button onClick={()=>handledelete(item.id)} className='btn'><i class="fas fa-trash"></i></button>
        </li>
  )
}
