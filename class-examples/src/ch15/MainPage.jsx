import React from "react";
//기본 설정, 순서1
import styled from "styled-components";

// 순서2 적용. styled.선택자 ` 속성값 넣기. `
const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

const MainPage = () => {
  return (
    <Wrapper>
      <Title>안녕, 테스트</Title>
    </Wrapper>
  );
};

export default MainPage;
