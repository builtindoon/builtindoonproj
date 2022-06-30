import React from "react";
import "./navbarcss.css";

export default function Navbar(props) {
    const [style, setStyle] = React.useState("0");
    const changeStyle = () => {
        setStyle("250px");
    }
    const changeStyle2 = () => {
        setStyle("0");
    }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div id="mySidenav" class="sidenav" style={{width: style}}>
        <a href="javascript:void(0)" class="closebtn" onClick={changeStyle2}>
          &times;
        </a>
        <a href="about">About</a>
        <a href="services">Blogs</a>
        <a href="skills">Skills</a>
        <a href="team">Team</a>
        <a href="contact">Contact</a>
      </div>
      <span style={{fontSize: "30px",cursor: "pointer", color: "#ffffff"}} onClick={changeStyle}>&#9776;&nbsp;&nbsp;</span>
      <a class="navbar-brand" href="#">
        Builtindoon
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class={"nav-item "+props.aH}>
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class={"nav-item "+props.aS}>
            <a class="nav-link" href="login">
              SignUp
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="eu">
              EU
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="addlocalshop">
              Local Shop
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
