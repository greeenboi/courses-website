import React from 'react'
import styled from 'styled-components'
import Cooltext from '../components/Cooltext'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "../components/home.scss"

const Section = styled.section`
  height: 180vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
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

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:2rem;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding:0.5em;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  margin: 5px;
  height: 28rem;
  width: 20rem;
  position: relative;
  background: linear-gradient(135deg, var(--card-grd1), var(--card-grd2));
  border-radius: 20px;
  transition: all ease 0.3s;
  z-index: 1;
  &:hover{
    background: linear-gradient(-135deg, var(--card-grd1), var(--card-grd2));
    filter: drop-shadow(10px 10px 10px rgba(173,155,255,0.6));
  }
  
  `
const Logo = styled.img`
  
  padding:'5px';
  filter: drop-shadow(0 1em 2em #64ffe0aa);
`
const H2 = styled.h2`
  font-family: 'Roboto', sans-serif;
`
const CardText = styled.p`
  margin:5px;
  font-family: 'Raleway', sans-serif;
  font-size: 17px;
  justify-content: center;

`
const Button = styled.button`
  align-items: center;
  font-family: 'Raleway', sans-serif;
  gap:10px;
  width: 30%;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px 8px 8px 6px;   
  cursor: pointer;        
  justify-content: center;
  padding: 10px;
  transition: background-color 500ms, border-color 400ms; 
  &:hover{
    filter: drop-shadow(10px 10px 10px rgba(173,155,255,0.6));
    background-color: rgba(100, 198, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`

const Home = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Explore`; 
    navigate(path);
  }

  return (
    <Section>
            <Container>
                <Title><img src="https://i.postimg.cc/Qx41fFVX/logo.png" height="70px"/>Skill<Cooltext/></Title>  
                <WhatWeDo>Build Your Skills Online</WhatWeDo>
                <Button onClick={routeChange}>Start Learning Now! <FaArrowRight/></Button>
            </Container>
            <Container>
                <Desc>Our Learning Opportunities</Desc>
                <WhatWeDo>A New way to improve your skills and spice up your portfolio!</WhatWeDo>
              <Grid >
                <Card>
                  <Logo width="96" height="96" src="https://img.icons8.com/nolan/96/test-passed.png" />
                  <H2>Free Online Courses</H2>
                  <CardText>Interactive Learning for absolute beginners in coding!</CardText>
                </Card>
                <Card>
                  <Logo width="96" height="96" src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/128/external-laptop-lifestyle-icongeek26-outline-gradient-icongeek26.png"/>
                  <H2>Project Based Learning</H2>
                  <CardText>Short highly-focused videos that make learning to code easy and addicting!</CardText>
                  <button className="learn-more" onClick={routeChange}>
                    <div className="circle">
                      <span className="icon arrow"></span>
                    <p className="button-text">Try it Out</p>
                    </div>
                  </button>
                </Card>
                <Card>
                  <Logo width="96" height="96" src="https://img.icons8.com/nolan/96/portfolio.png" alt="portfolio"/>
                  <H2>Create an Impressive Portfolio</H2>
                  <CardText>Quick tutorials on Hot, New Technologies and Concepts</CardText>
                </Card>
              </Grid>
              
 
            </Container>
    </Section>
  )
}

export default Home