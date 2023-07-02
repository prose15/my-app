import './App.css';
import { Header } from './js/Header';
import { Footer } from './js/Footer';
import { Content } from './js/Content';
import { Input } from './js/Input';
import React, { useState } from 'react'
import { Search } from './js/Search';

function App() {
  const [item,setItems] = useState(JSON.parse(localStorage.getItem("todo_list")))
  const [element,setElement] = useState('')
  const handlechange = (id) =>{
    const listItem = item.map((item) => item.id===id ? {...item, checked:!item.checked} : item)
    setItems(listItem)
    localStorage.setItem("todo_list",JSON.stringify(listItem))
  }
  const [search,setSearch] = useState('')
  const handledelete = (id) =>{
    const listItem = item.filter((item) => item.id !== id)
    setItems(listItem)
    localStorage.setItem("todo_list",JSON.stringify(listItem))
  }
  const addElement = (element) =>{
    const id = item.length ? item[(item.length -1)].id+1 : 1;
    const rozo = {id, checked:false, element}
    const listElement = [...item,  rozo]
    setItems(listElement)
    localStorage.setItem("todo_list",JSON.stringify(listElement))
  }

  const handlesubmit = (e) =>{
    e.preventDefault()
    
    console.log(element)
    addElement(element)
    setElement('')
  }

  
  return (
    <div className="App">
      <Header/>
      <Input
       element={element}
       setElement={setElement}
       handlesubmit={handlesubmit}/>
       <Search
      search={search}
      setSearch={setSearch}/>
      <Content
        item = {item.filter(item=> ((item.element).toLowerCase()).includes(search.toLowerCase()))}
        handlechange = {handlechange}
        handledelete = {handledelete}
      />
      <Footer
      prose ={item.length}
      />
    </div>
  );
}

export default App;
