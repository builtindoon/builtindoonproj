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
<<<<<<< HEAD
            <NavLink to="/euregistration" activeStyle>
            EU
            </NavLink>
            <NavLink to="/Addlocalshop" activeStyle>
            Local Store
            </NavLink>
<<<<<<< HEAD
=======
            <NavLink to="/EU" activeStyle>
              EU
            </NavLink>
            <NavLink to="/Addlocalshop" activeStyle>
              Local Store
            </NavLink>
>>>>>>> master
=======
            <NavLink to="/state" activeStyle>
            state
            </NavLink>
>>>>>>> 975c9ab345aa89edfb0afcd40e228d6bb3364b6b
         </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;  