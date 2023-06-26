
import "../css/Content.css"
export const Content = ({item,handlechange,handledelete}) => {
  console.log(item)
  return (
    <div className='content'>
      {(item.length)? (
      <ul>
        {
        item.map((item)=>(
        <li key={item.id}>
          <input 
        type='checkbox'
        onChange={()=>handlechange(item.id)}
        checked = {item.checked}
          />
        <label>{item.name}</label>
        <button onClick={()=>handledelete(item.id)}>delete</button>
        </li>
          
        ))
       }
      </ul>
      ):<p>Your list is empty</p>}
      
    </div> 
  )
}
