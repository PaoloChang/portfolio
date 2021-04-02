import React from "react";
import styled from "styled-components";
import "./App.css";
import Profile from "./components/screens/Profile";
import Projects from "./components/screens/Projects";
import Skills from "./components/screens/Skills";
import Welcome from "./components/screens/Welcome";

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
