import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Home(props) {
  console.log(props.isActiveHome);
  return (
    <div>
    <Header isActiveHome={props.isActiveHome} />
    <div style={{height: "100vh"}}>This is home page
    </div>
    <Footer />
    </div>
  )
}
