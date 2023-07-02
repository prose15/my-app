import React from 'react'
import "../css/Search.css"

export const Search = ({search,setSearch}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()} className='search'>
        <input
        type='text'
        placeholder='serch items'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
    </form>
  )
}
