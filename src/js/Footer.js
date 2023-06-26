import React from 'react'
import "../css/Footer.css"
export const Footer = () => {
    const year = new Date();
  return (
    <div className='Footer'><p>Copyright &copy; {year.getFullYear()}</p></div>
  )
}
