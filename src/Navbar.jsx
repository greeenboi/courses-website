import React from 'react'
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components"
import "./navbar.css"
import { BsSearch } from 'react-icons/bs'

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 95vw;
`;

const Container = styled.div`
    width: 95vw;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0px 10px;
    height: auto;
`;
const Links = styled.div`
   display: flex;
   align-items: center;
   gap:45px;
`;

const List = styled.ul`
    display: flex;
    gap:20px;
    list-style: none;
`;

const Button = styled.button`
  align-items: center;
  
  
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0px 8px 8px 0px;   
  left: 2rem;
  cursor: pointer;        
  justify-content: center;
  padding: 10px;
  transition: background-color 500ms, border-color 400ms; 
  &:hover{
    background-color: rgba(100, 198, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`

const NavLink = styled(Link)`
  color: gray;
  cursor: pointer;
  &.active {
    
    color: rgba(100, 198, 255,0.6);
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
`

const Input = styled.input`
  padding: 10px;
  background-color: rgba(0,0,0,0.3);
  color:rgba(255,255,255,0.6);
  border:none;
  border-radius:8px 0px 0px 8px;
  
  padding-left:2rem;
  &:focus{
    background-color: rgba(0,0,0,0.6);
    border-color:rgba(0,0,0,0.8);
  }
`

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <NavLink className="listItem" to="/" ><img src="src\assets\logo.png" className="logo" alt="react" /></NavLink>
                <List>
                    <NavLink className="listItem" to="/Explore" >Explore</NavLink>
                    <NavLink className="listItem" to="/About" >About</NavLink>
                    <NavLink className="listItem" to="/Forum" >Forum</NavLink>
                    <NavLink className="listItem" to="/Contact" >Contact</NavLink>
                </List>
            </Links>
            <Links>
                <Form>
                  <Input id="search-box" type="text" placeholder='Type here...'/>
                  <Button type="submit" className='button_class'><BsSearch/></Button>
                </Form>
                <button className="button">Log In</button>
            </Links>
        </Container>
        </Section>
  )
}

export default Navbar