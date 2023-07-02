import React from 'react'
import { Itemid } from './Itemid'

export const Listitems = ({item,handlechange,handledelete}) => {
  return (
    <ul>
        {
        item.map((item)=>(
        <Itemid
        key={item.id}
        item = {item}
        handlechange = {handlechange}
        handledelete = {handledelete}
        />  
        ))
       }
      </ul>
  )
}
