import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.dark ? "red" : "dark")};
  backgroud: ${(props) => (props.dark ? "black" : "white")};
  border: 1px solid black;
`;

const Test = styled.div`
  color: ${(props) => (props.dark ? "white" : "dark")};
  backgroud: ${(props) => (props.dark ? "black" : "white")};
  border: 1px solid black;
`;

const Sample = (props) => {
  return (
    <div>
      <Button>Normal</Button>
      <br />
      <Button dark>Dark</Button>
      <Test dark>속성 테스트</Test>
    </div>
  );
};

export default Sample;
