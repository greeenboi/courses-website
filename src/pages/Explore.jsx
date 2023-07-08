import { React , useState } from 'react'
import styled  from 'styled-components';
import { FaReact } from 'react-icons/fa';
import "../components/explore.scss"

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

  const [imgPosition, setImgPosition] = useState({ left: 0, top: 0 });

  
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const img = e.target.querySelector("img");
    try {
      const left = e.clientX - rect.left - img.offsetWidth / 4 ;
      const top = e.clientY - rect.top - img.offsetHeight / 4;
      setImgPosition({ left, top });
      
    } catch (error) {
      console.log();
    }
  };
  
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
            <nav className="card" id="nav" onMouseMove={handleMouseMove} >
                <Subtitle>Weather Website</Subtitle>
                <FaReact style={{alignSelf:'flex-start'}}/>
            <img 
              style={{ scale:"0.5", position: 'absolute', left: imgPosition.left, top: imgPosition.top }}
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" />   
            </nav>
            <nav className="card">
                <Subtitle>Chat Application</Subtitle>
                <FaReact style={{alignSelf:'flex-start'}}/>
            </nav>
            <nav className="card">
                <Subtitle>Sketching Web-App</Subtitle>
                <FaReact style={{alignSelf:'flex-start'}}/>
            </nav>
            <nav className="card">
                <Subtitle>Responsive NavBar</Subtitle>
                <FaReact style={{alignSelf:'flex-start'}}/>
            </nav>
          </Grid>
        </Right>
      </Container>
      <Container>
        <Right>
          <Desc>Courses type 2</Desc>
          <Grid>
            <nav className="card">
                <Subtitle>Is this the Explore page?</Subtitle>
            </nav>
            <nav className="card">
                <Subtitle>Is this the Explore page?</Subtitle>
            </nav>
            <nav className="card">
                <Subtitle>Is this the Explore page?</Subtitle>
            </nav>
            <nav className="card">
                <Subtitle>Is this the Explore page?</Subtitle>
            </nav>

            <nav className="card">
                <Subtitle>Is this the Explore page?</Subtitle>
            </nav>
            <nav className="card">
                <Subtitle>Is this the Explore page?</Subtitle>
            </nav>
            <nav className="card">
                <Subtitle>Is this the Explore page?</Subtitle>
            </nav>
            <nav className="card">
                <Subtitle>Is this the Explore page?</Subtitle>
            </nav>
          </Grid>
        </Right>
      </Container>
        
    </Section>
  )
}
export default Explore