import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
           About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/skills" activeStyle>
          Skills
          </NavLink>
          <NavLink to="/teams" activestyle>
            Teams
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Sign up
            </NavLink>
            <NavLink to="/euregistration" activeStyle>
            EU
            </NavLink>
            <NavLink to="/Addlocalshop" activeStyle>
            Local Store
            </NavLink>
            <NavLink to="/state" activeStyle>
            state
            </NavLink>
         </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;  