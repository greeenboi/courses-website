import React from 'react'
import styled  from 'styled-components';
import { FaReact } from 'react-icons/fa';

const Section = styled.section`
  height: 180vh;
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll: auto;
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

const WhatWeDo = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:10px;
`;


const Subtitle = styled.h4`
  display: flex;
  justify-content: right;
  padding:1rem;
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    padding:3rem;
    justify-content: center;
    backdrop-filter: blur(3px);
    flex-direction:column;
    background-color: rgba(255,255,255, 0.1);
    border: 1px solid rgba(255,255,255, 0.1);    
    border-radius:5px;
    box-shadow: 2px 2px 4px rgba(black, 0.25);
    transition: all 600ms ease-in-out;
    &:hover{
      padding:4rem;
      cursor: pointer;
      background-color: rgba(255,255,255,0.2);
      backdrop-filter: blur(4px);
    }
`
const Right = styled.div`
  flex:3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Desc = styled.p`
  background-color: rgba(250,250,250,0.05);
  align-self: flex-end;
  border-radius: 0px 8px 0px 8px;
  font-size:50px;
  font-weight:400;
  font-style:italic;
  font-family: 'Raleway', sans-serif;
  text-align:right;
  padding:1px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 2em;
  color: rgba(120,120,120,0.95);
`;

const Grid = styled.div`
  display: grid;
  margin:2em;
  margin-top:0.5em;
  justify-items: center;
  justify-content: center;
  padding:1em;
  align-items: center;
  grid-template-columns: repeat(4,minmax(0,1fr));
  row-gap: 3rem;
  column-gap: 1rem;
  margin-bottom: 40px;
  backdrop-filter: blur(3px);
`


const Explore = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Title>Explore</Title>  
        <WhatWeDo>Did you know?</WhatWeDo>
        </Left>
        <Right>
            <Desc>Web Development</Desc>
          <Grid>
            <Card>
                <Subtitle>Weather Website</Subtitle>
                <FaReact style={{alignSelf:'flex-start'}}/>
            </Card>
            <Card>
                <Subtitle>Chat Application</Subtitle>
                <FaReact style={{alignSelf:'flex-start'}}/>
            </Card>
            <Card>
                <Subtitle>Sketching Web-App</Subtitle>
                <FaReact style={{alignSelf:'flex-start'}}/>
            </Card>
            <Card>
                <Subtitle>Responsive NavBar</Subtitle>
                <FaReact style={{alignSelf:'flex-start'}}/>
            </Card>
          </Grid>
        </Right>
      </Container>
      <Container>
        <Right>
          <Desc>Courses type 2</Desc>
          <Grid>
            <Card>
                <Subtitle>Is this the Explore page?</Subtitle>
            </Card>
            <Card>
                <Subtitle>Is this the Explore page?</Subtitle>
            </Card>
            <Card>
                <Subtitle>Is this the Explore page?</Subtitle>
            </Card>
            <Card>
                <Subtitle>Is this the Explore page?</Subtitle>
            </Card>

            <Card>
                <Subtitle>Is this the Explore page?</Subtitle>
            </Card>
            <Card>
                <Subtitle>Is this the Explore page?</Subtitle>
            </Card>
            <Card>
                <Subtitle>Is this the Explore page?</Subtitle>
            </Card>
            <Card>
                <Subtitle>Is this the Explore page?</Subtitle>
            </Card>
          </Grid>
        </Right>
      </Container>
        
    </Section>
  )
}
export default Explore