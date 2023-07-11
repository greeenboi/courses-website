import { React ,useEffect} from 'react'
import styled from 'styled-components'
import hljs from "highlight.js";

const Section = styled.section`
  height: 200vh;
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  scroll: smooth;
  
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
  background-color:rgba(42, 46, 53, 0.7);
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
  &:hover{
    height:50px;
    width:50px;
    opacity:0.7;
    border: 4px solid rgba(255,255,255,0.2);
  }
`
const Card = styled.div`
  width:fit-content;
  height: fit-content;
  padding: 1.5rem;
  margin: 0px 10px 10px 0px;
  background-color:rgba(255,255,255,0.2);
  border-radius: 5px;
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
  font-family: 'Raleway', sans-serif;
  font-size:10px;
  color: rgb(100,200,255);
  transition: all 400ms ease-in;
  &:hover{
    cursor:pointer;
    font-size:11px;
  }
`

const Text1 = styled.div`
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
const Text2 = styled.div`
  font-size:18px;
  padding:10px;
  font-family:'Sofia Sans', sans-serif;
  font-weight:300;
  text-align:left;
  &::first-letter{
    padding:5px;
    background-color: rgba(35, 35, 35,0.4);
    margin: 1px;
    border: 0;
    border-radius: 2px;
    color:rgba(30, 255, 157,0.8);
  }
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
const Item = styled.li`
  padding:10px;
  font-family: 'Rajdhani', sans-serif;
  font-size:16pItem
`
function escapeHtml(html) {
  return html.replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
}

function Code({ content }) {
  const escapedHTML = escapeHtml(content);

  return <code>{escapedHTML}</code>;
}

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
          <Card>
            <Text2>
              For this Project we will be creating a website that shows weather information on a particular city.<br />
              We will be using the Open Weather API to get weather information on a specific city and Tailwind css to style the website.
              <br /><br />
              👉I will guide you through the Api key creation and help you get started with simple API operations like 'GET'and 'POST'. <br /><br />
              👉Then I will help you setup the project as a simple Vite application with JS, Tailwind css and Publish your Website to a service provider like Netlify or Vercel.<br /><br />
              <Subtitle onClick={() => window.open('https://whatstheweatherhere.netlify.app')} >||Try out a demo here||</Subtitle>
            </Text2>
            <Text2>
              <b>Contents 👇</b>
              <ul style={{listStyle:"none",gap:"5px"}}>
                <Item><a href="#Apicreate">Creating an account on Open Weather Api</a></Item>
              </ul>
            </Text2>
          </Card>
          <Card>
            <Text2 id="Apicreate">
              To create an account on Open Weather follow the instructions below👇
              <ul style={{listStyle:"none",gap:"10px"}}>
                <Item><button style={{border:'2px',borderColor:"#fff",backgroundColor:"rgba(10,10,10,0.2)", padding:"8px"}} onClick={() => window.open('https://home.openweathermap.org/users/sign_up')}>{`>proceed to their website and create an account<`}</button></Item>
                <Item>Once created, Proceed to your Api Keys <a href="https://home.openweathermap.org/api_keys">page</a> </Item>
                <Item>
                  <img src=""/> 
                  Copy your Api-Key and keep it aside for now. We will need this later when we make requests to the provider for weather data
                </Item>
              </ul>
            </Text2>
            <div>
            <pre>
              <Code className="language-javascript" content= {`useEffect(() => { hljs.highlightAll(); });`}/>
            </pre>
            </div>
          </Card>
        </Container>
    </Section>
  )
}

export default Weather