import { React ,useEffect, useRef } from 'react'
import styled from 'styled-components'
import hljs from "highlight.js";

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

const Weather = () => {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <Section>
        <Container>
          <div>
          <pre>
            <code className="language-typescript">const variable = 'raw';</code>
          </pre>
          </div>
        </Container>
    </Section>
  )
}

export default Weather