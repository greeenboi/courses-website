import { React ,useEffect, useRef } from 'react'
import styled from 'styled-components'
import hljs from "highlight.js";

const Section = styled.section`
  height: 100vh;
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  scroll: auto;
  
`;

const Container = styled.div`
  height: 100vh;
  width: 99vw;
  display: flex;
  flex-direction: column;
`;

const Pcard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color:rgba(42, 46, 53, 0.6);
  border-radius:0.5rem;
  margin-bottom:1rem;
  margin-top:0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`
const Img = styled.img`
  border: 1px solid rgba(255,255,255,0.2);
  border-radius:80px;
  height:60px;
  width:60px;
  gap:5px;
  align-items: center;
  margin:0px 0px 0px 0px;
  transition: all 500ms ease-in-out;
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  &:nth-child(1){
    height:65px;
    width:65px;
  }
  &:nth-child(1):hover{
    height:60px;
    width:60px;
    opacity:0.8;
    border: 4px solid rgba(255,255,255,0.2);
  }
  &:hover{
    height:50px;
    width:50px;
    opacity:0.7;
    border: 4px solid rgba(255,255,255,0.2);
  }
`

const Title = styled.h1`
  background-image: linear-gradient(to top,var(--tw-gradient-stops));
  --tw-gradient-from: #f97316;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #eab308;
  color: #0000;
  -webkit-background-clip: text;
`
const Subtitle = styled.h2`

`

const Text1 = styled.p`
  font-size:15px;
  padding:10px;
  font-family:'Sofia Sans', sans-serif;
  font-weight:200;
  font-style:italic;
  display:inline-flex;
  align-items:center;
  gap:15px;
  justify-content:space-between;
`
const Text = styled.p`
  font-size:18px;
  padding:10px;
  font-family:'Sofia Sans', sans-serif;
  font-weight:300;
  
`

const Button = styled.button`
  align-items: center;
  font-family: 'Raleway', sans-serif;
  gap:10px;
  width: 10%;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
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
const List = styled.ul`
  display: flex;
  gap:5px;
  list-style: none;
  justify-self:flex-end;
  align-self:center;
`
const Samp = styled.li`
  font-family: 'Rajdhani', sans-serif;
  font-size:16px;
  color: #00d8ff;
  background: #222;
  margin-top:5px;
  margin-bottom:5px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding-left:2px;
  padding-right:2px;
`

const Weather = () => {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <Section>
        <Container>
          <Pcard>
          <Text1><Img src="https://avatars.githubusercontent.com/u/118198968?v=4" alt="suvangs"/>By Suvan GS</Text1>
          <Title>Weather Website with Open Weather Api</Title>  
          <List>
          <Samp>{`#Api`} </Samp>  
          <Samp>{`#TailWind Css`}</Samp>  
          </List>
          <Button onClick={() => window.open('https://github.com/greeenboi/weather-website')}>Source Code</Button>
          </Pcard>
          <div>
          <pre>
            <code className="language-javascript">{`useEffect(() => { hljs.highlightAll(); });`}</code>
          </pre>
          </div>
        </Container>
    </Section>
  )
}

export default Weather