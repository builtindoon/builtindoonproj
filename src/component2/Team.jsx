import React from 'react'
import Footer from "./Footer";
import Header from "./Header";

export default function Team(props) {
  return (
    <div>
    <Header isActiveTeam={props.isActiveTeam} />
    <div style={{height: "100vh"}}>This is team page</div>
    <Footer />
    </div>
  )
}
