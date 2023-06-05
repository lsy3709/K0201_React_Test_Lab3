import React from "react";
import styled from "styled-components";

//name 은 작업 할 때 사용할 변수.
//text 실제 웹 화면에 보이는 한글 이름.
const categories = [
  { name: "food", text: "부산맛집정보 서비스" },
  { name: "walking", text: "부산도보여행 정보 서비스" },
];

// 카테고리 부분 스타일 설정.
// white-space: pre; -> 텍스트와 줄바꿈, 공백을 그대로 유지.
// overflow-x: auto; -> 가로 공간을 넘어가면 스크롤바를 이용해서 볼수 있게 함.
//   font-weight : 600; -> 100 ~ 900 : 굵기를 의미.
const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media scren and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
const Category = styled.div`
  font-size: 1.2 rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.2rem;

  &.hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {/* c -> name: 'food', text: '부산맛집정보 서비스' */}
      {categories.map((c) => (
        <Category key={c.name}>{c.text}</Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
