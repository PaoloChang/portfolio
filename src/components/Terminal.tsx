import React from "react";
import styled from "styled-components";

interface IFakeButton {
  color?: string;
  left?: boolean;
}

const Container = styled.div`
  margin: 10px;
  background-color: #1e1e1e;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const TerminalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 25px;
  background-color: #323233;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

const FakeButton = styled.div<IFakeButton>`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  margin: 4px;
  margin-left: ${(props: any) => (props.left === true ? "10px" : "inherits")};
  background-color: ${(props) => props.color};
`;

const TerminalMain = styled.div`
  padding: 8px;
  background-color: #1e1e1e;
  color: #ffffff;
  font-family: "Source Code Pro", monospace;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
`;

const Terminal: React.FC = ({ children }) => {
  return (
    <Container>
      <TerminalHeader>
        <FakeButton color="#FF605C" left={true} />
        <FakeButton color="#FFBD44" />
        <FakeButton color="#00CA4E" />
      </TerminalHeader>
      <TerminalMain>{children}</TerminalMain>
    </Container>
  );
};

export default Terminal;
