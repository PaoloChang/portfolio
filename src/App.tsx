import React from "react";
import styled from "styled-components";
import "./App.css";
import Profile from "./screens/Profile";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills";
import Welcome from "./screens/Welcome";

const Container = styled.div`
  max-width: 960px;
`;

function App() {
  return (
    <Container>
      <Welcome />
      <Profile />
      <Skills />
      <Projects />
    </Container>
  );
}

export default App;
