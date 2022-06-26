import React from 'react'
import "../App.css"

export default function Footer() {
  return (
    <footer className="footer p-4" style={{backgroundColor: "#c5c6d0"}}>
      <div className="center">
        <ul>
        <li>Facebook</li>
        <li>Google</li>
       <li>Contact us </li>
        </ul>
        <div className='center' style={{width: "200px", marginLeft: "auto", marginRight: "auto"}}>@copyright 2022 Prachi</div>
      </div>
    </footer>
  )
}
