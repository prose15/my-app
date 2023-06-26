import './App.css';
import { Header } from './js/Header';
import { Footer } from './js/Footer';
import { Content } from './js/Content';
import React, { useState } from 'react'

function App() {
  const [item,setItems] = useState(
    [
      {
        id : 1,
        checked : true,
        name : "c++"
      },
      {
        id : 2,
        checked : false,
        name : "java"
      }, 
    ]
  )
  const handlechange = (id) =>{
    const listItem = item.map((item) => item.id===id ? {...item, checked:!item.checked} : item)
    setItems(listItem)
    localStorage.setItem("todo_list",JSON.stringify(listItem))
  }
  const handledelete = (id) =>{
    const listItem = item.filter((item) => item.id !== id)
    setItems(listItem)
    localStorage.setItem("todo_list",JSON.stringify(listItem))
  }
  return (
    <div className="App">
      <Header/>
      <Content
        item = {item}
        handlechange = {handlechange}
        handledelete = {handledelete}
      />
      <Footer/>
    </div>
  );
}

export default App;
