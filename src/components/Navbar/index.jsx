import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements.jsx';

const Navbar = () => {
  return <div>
      <Nav>
        <NavLink to="/">
        {/* @todo: use srcSet for images */}
          <img src={"https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt="" />
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to="/about" activestyle>
            <h3>About</h3>
          </NavLink>
          <NavLink to="/services" activestyle>
            <h3>Services</h3>
          </NavLink>
          <NavLink to="/search" activestyle>
            <h3>Search</h3>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to = "/search-query"> Search</NavBtnLink>
        </NavBtn>
      </Nav>
  </div>;
};

export default Navbar;
