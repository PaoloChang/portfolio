import React from "react";
import styled from "styled-components";
import Terminal from "../components/Terminal";
import Github from "../../images/github.png";
import Docker from "../../images/docker.png";
import Jenkins from "../../images/Jenkins.png";

interface ILine {
  case?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 28px;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
`;
const Tools = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;
const Line = styled.div<ILine>`
  display: block;
  margin-left: ${(props) =>
    props.case === "array"
      ? "20px"
      : props.case === "arrayValue"
      ? "40px"
      : null};
`;
const Attribute = styled.span`
  margin-left: 20px;
  color: #8bddff;
`;
const Value = styled.span`
  margin-left: 10px;
  color: #d88e73;
`;
const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const Skills = () => {
  return (
    <Container>
      <Title>Skills</Title>
      <Wrapper>
        <Terminal>
          &#123;
          <Line>
            <Attribute>"stack"</Attribute>:<Value>Front End</Value>
          </Line>
          <Line>
            <Attribute>"skills"</Attribute>: [
          </Line>
          <Line case="arrayValue">
            <Value>"ES6"</Value>,
          </Line>
          <Line case="arrayValue">
            <Value>"TypeScript"</Value>,
          </Line>
          <Line case="arrayValue">
            <Value>"jQuery"</Value>,
          </Line>
          <Line case="arrayValue">
            <Value>"Bootstrap"</Value>
          </Line>
          <Line case="array">]</Line>
          &#125;
        </Terminal>
        <Terminal>
          &#123;
          <Line>
            <Attribute>"stack"</Attribute>:<Value>Server</Value>
          </Line>
          <Line>
            <Attribute>"skills"</Attribute>: [
          </Line>
          <Line case="arrayValue">
            <Value>"Node.js"</Value>,
          </Line>
          <Line case="arrayValue">
            <Value>"Apollo"</Value>,
          </Line>
          <Line case="arrayValue">
            <Value>"Tomcat"</Value>
          </Line>
          <Line case="array">]</Line>
          &#125;
        </Terminal>
        <Terminal>
          &#123;
          <Line>
            <Attribute>"stack"</Attribute>:<Value>Database</Value>
          </Line>
          <Line>
            <Attribute>"skills"</Attribute>: [
          </Line>
          <Line case="arrayValue">
            <Value>"Prisma"</Value>,
          </Line>
          <Line case="arrayValue">
            <Value>"MSSQL"</Value>,
          </Line>
          <Line case="arrayValue">
            <Value>"MySQL"</Value>
          </Line>
          <Line case="array">]</Line>
          &#125;
        </Terminal>
      </Wrapper>
      <Tools>
        <Logo alt="github" src={Github} />
        <Logo alt="docker" src={Docker} />
        <Logo alt="Jenkins" src={Jenkins} />
      </Tools>
    </Container>
  );
};

export default Skills;
