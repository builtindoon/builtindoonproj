import React from 'react'
import Footer from "./Footer";
import Header from "./Header";

export default function Services(props) {
  return (
    <div>
    <Header isActiveServices={props.isActiveServices} />
    <div style={{height: "100vh"}}>This is services page</div>
    <Footer />
    </div>
  )
}
