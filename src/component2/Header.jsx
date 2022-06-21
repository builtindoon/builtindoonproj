import React from "react";

export default function Header(props) {
  console.log(props.isActiveHome);
  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#00FF00"}}>
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
          <li class={"nav-item " + props.isActiveHome}>
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class={"nav-item " + props.isActiveShop}>
            <a class="nav-link" href="addlocalshop">
             Add Local Shop
            </a>
          </li>
          <li class={"nav-item " + props.isActiveContact}>
            <a class="nav-link" href="contact">
              Contact
            </a>
          </li>
          <li class={"nav-item " + props.isActiveRegister}>
            <a class="nav-link" href="register">
              Register
            </a>
          </li>
          <li class={"nav-item " + props.isActiveServices}>
            <a class="nav-link" href="services">
              Services
            </a>
          </li>
          <li class={"nav-item " + props.isActiveTeam}>
            <a class="nav-link" href="team">
              Team
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
