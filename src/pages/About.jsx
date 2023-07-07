import React from 'react'
import styled from "styled-components"


const Section = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 99vw;
  
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  flex:2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:20px;
`;

const Title = styled.h1`
  font-size: 70px;
  border-radius: clamp(0.4rem, 0.75vw, 1rem);
  color: rgba(255,255,255,0.9);
  
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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


const About = () => {
  return (
    
    <Section>
            <Container>
                <Left>
                   <Title>About</Title>  
                   <WhatWeDo>Did you know?</WhatWeDo>
                </Left>
                <Right>
                    <Card>
                        <Subtitle>Is this the about page?</Subtitle>
                    </Card>
                    <Desc>Yes,This is the about page</Desc>
                </Right>
            </Container>
    </Section>
    
  )
}
export default About