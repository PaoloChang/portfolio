import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, #ffffff 0%, #bdc3c7 20%, #2c3e50 50%);
  color: #eeeeee;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 60%;
  height: 20%;
  border: 3px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Code = styled.p`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  text-align: center;
  overflow: hidden;
  padding: 0.5rem;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const Typed = styled.span`
  margin-left: 0.5rem;
  font-weight: normal;
  font-size: 3.6rem;
`;
const blinkAnimation = keyframes`
  0% { background-color: #ccc; }
  49% { background-color: #ccc; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
  100% { background-color: #ccc; }
`;
const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  background-color: #ccc;
  margin-left: 0.1rem;
  margin-right: 0.5rem;
  animation: blink 1s infinite;
  animation-name: ${blinkAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
const CursorTyping = styled.span`
  animation: none;
`;

const Welcome = () => {
  const typedElement = useRef<HTMLSpanElement>(null);
  const cursorElement = useRef<HTMLSpanElement>(null);

  const textArray = ["Web", "Mobile", "FinTech", "Developer"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  useEffect(() => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  }, []);

  const type = () => {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorElement.current!.classList.contains("typing"))
        cursorElement.current!.classList.add("typing");
      typedElement.current!.textContent += textArray[textArrayIndex].charAt(
        charIndex
      );
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      //erase
      cursorElement.current!.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  };

  const erase = () => {
    if (charIndex > 0) {
      if (!cursorElement.current!.classList.contains("typing"))
        cursorElement.current!.classList.add("typing");
      typedElement.current!.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      // type
      cursorElement.current!.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Code>
          &lt;
          <Typed ref={typedElement}></Typed>
          <Cursor ref={cursorElement}>&nbsp;</Cursor>
          &#47;&gt;
        </Code>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
