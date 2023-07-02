import React from 'react'
import Navbar from '../Navbar'
import styled from 'styled-components'

import Cooltext from '../components/Cooltext'

const Section = styled.div`
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  scrolling: true;
`;

const Container = styled.div`
  height: 100vh;
  width: 99vw;
  scrolling: true;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  
`;



const Title = styled.h1`
  font-size: 120px;
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
  color: rgba(255,255,255,0.9);
  font-family: 'Dancing Script', cursive;
`;

const WhatWeDo = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rubik', sans-serif;
  font-weight: oblique;
  gap:10px;
`;


const Subtitle = styled.div`
  display: flex;
  justify-content: right;
  padding:1rem;
`;
const Desc = styled.p`
  font-size:24px;
  
  color: rgba(120,120,120,0.9);
`;

const Right = styled.div`
  flex:3;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
    width:10%;
    padding:3rem;
    backdrop-filter: blur(3px);
    background-color: rgba(255,255,255, 0.1);
    border: 1px solid rgba(255,255,255, 0.1);    
    border-radius:5px;
    box-shadow: 2px 2px 4px rgba(black, 0.25);
`


const Home = () => {
  return (
    <Section>
        <Navbar />
            <Container>
                
                   <Title><img src="src\assets\logo.png" height="70px"/>Skill<Cooltext/></Title>  
                   <WhatWeDo>Build Your Skills Online</WhatWeDo>
                
                
            </Container>
    </Section>
  )
}

export default Home