import React from 'react'
import reactLogo from './assets/react.svg'
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components"
import "./navbar.css"
import "./searchbar.scss"

const NavLink = styled(Link)`
  color: gray;
  cursor: pointer;
  &.active {
    
    color: rgba(100, 198, 255,0.6);
  }
`;

const Navbar = () => {
  return (
    <section className="section">
        <div className="container">
            <div className="links">
                <img src={reactLogo} className="logo" alt="react" />
                <ul className="list">
                    <NavLink className="listItem" to="/Home" >Home</NavLink>
                    <NavLink className="listItem" to="/Explore" >Explore</NavLink>
                    <NavLink className="listItem" to="/About" >About</NavLink>
                    
                </ul>
            </div>

            <form class="search-container" action="//llamaswill.tumblr.com/search"> 
  <input id="search-box" type="text" class="search-box" name="q" maxLength="20"/>
  <label for="search-box" class="search-icon"><span class="fas fa-search search-icon"></span></label>
  <input type="submit" id="search-submit" />
</form>
            <div>
                <button className="button">Log In/Sign Up</button>
            </div>
        </div>
    </section>
  )
}

export default Navbar