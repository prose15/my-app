
import "../css/Content.css"
import { Listitems } from "./Listitems"
export const Content = ({item,handlechange,handledelete}) => {
  console.warn(item)
  return (
    <div className='content'>
      {(item.length)? (
      <Listitems
      item = {item}
      handlechange = {handlechange}
      handledelete = {handledelete}
      />
      ):<p>Your list is empty</p>}
      
    </div> 
  )
}
