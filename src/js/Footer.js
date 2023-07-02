import React from 'react'
import "../css/Footer.css"
export const Footer = ({prose}) => {
  return (
    <div className='Footer'><p>{prose} List {prose === 1 ? "Item" : "Items"}</p></div>
  )
}
