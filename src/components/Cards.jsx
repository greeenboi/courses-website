import React from 'react'
import styled from "styled-components"

const Section = styled.div`
  height: 100vh;
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
const Card = styled.div`
    width:10%;
    padding:3rem;
    backdrop-filter: blur(3px);
    background-color: rgba(255,255,255, 0.1);
    border: 1px solid rgba(255,255,255, 0.1);    
    border-radius:5px;
    box-shadow: 2px 2px 4px rgba(black, 0.25);
`
const Desc = styled.p`
  font-size:24px;
  
  color: rgba(120,120,120,0.9);
`;
const Subtitle = styled.div`
  display: flex;
  justify-content: right;
  padding:1rem;
`;

const Cards = () => {
  return (
    <Section>
        <Container>
            Cards
            <Card>
                <Subtitle>Is this the Explore page?</Subtitle>
            </Card>
            <Desc>Yes,This is the explore page</Desc>
        </Container>
    </Section>
  )
}

export default Cards