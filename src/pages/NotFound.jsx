import React from 'react'
import { Link } from "react-router-dom";
import "../error.scss"
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;    
    margin:0;
    justify-content: flex-start;
    
    display: flex;
    flex-direction: column;
`
const Top = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    justify-content: center;
`

const Footer = styled.div`   
    display: flex;
    flex-direction: row;
    flex:1;    
    justify-content: space-between;
`

const NotFound = () => {
  return (
    <Container>
        <Top>
            <div className="error">404</div>  
                 
            <div className="info">Page is Missing/Non existent</div>            
        </Top>
        <Footer>
            <Link to='/Home' className="infot">Home</Link>
            <Link to='/About' className="infot">About</Link>
            <Link to='/Explore' className="infot">Explore</Link> 
        </Footer>
    </Container>
    
  )
}

export default NotFound

