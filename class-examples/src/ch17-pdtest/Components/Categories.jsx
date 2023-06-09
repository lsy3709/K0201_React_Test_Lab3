import React from "react";
import styled, { css } from "styled-components";

//추가작업 NavLink -> 해당 URL 주소에 표기
import { NavLink } from "react-router-dom";

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

//추가 UI
// 선택된 카테고리 값에 따라 스타일 변경.
// 카테고리 값을 state 관리, 라우터를 적용하기 전 버전.
// css 요소를 추가.
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
//styled-components 에서 기존 HTML에 접근 styled.div``
// 리액트의 컴포넌트 css 작업 할 때, styled(NavLink)
// 확장팩 : vscode-styled-component 설치하면.
// 백틱 안에 속성이 기존에는 전부다 빨간색으로 구분 안됨.
// 설치 후, 해당 속성의 요소가 구분도되고, 색깔 선택, 자동완성 등 여러 편의 기능이 탑재되어있다.
const Category = styled(NavLink)`
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
    border-bottom: 2px solid #cf2225;
    color: #22cf61;
    &:hover {
      color: #dbce3b;
    }
  }

  & + & {
    margin-left: 5rem;
  }
`;
// const Category = styled.div`
//   font-size: 1.2 rem;
//   cursor: pointer;
//   white-space: pre;
//   text-decoration: none;
//   color: inherit;
//   padding-bottom: 0.2rem;

//   &.hover {
//     color: #495057;
//   }

// ${(props) =>
//   props.active &&
//   css`
//     font-weight: 600px;
//     border-bottom: 2px solid #22b8cf;
//     color: #22b8cf;
//     &:hover {
//       color: #3bc9db;
//     }
//   `}

// & + & {
//   margin-left: 1rem;
// }
// `;

// props 부모 -> 자식 데이터 전달. 사용.
// state 끌어올리기, 자식 -> 부모 : 이벤트(부모에 설정이된 세터함수.)
// 예) onSelect 함수가 호출이 되면, 부모쪽 App.js 에 선언된 세터함수가 호출 되면서, 업데이트가 됨.
// props 객체 (읽기전용)-> 불변성. 순수함수.
//

//방법2 -> 라우팅 페이징으로 작업.
const Categories = () => {
  return (
    <CategoriesBlock>
      {/* c -> name: 'food', text: '부산맛집정보 서비스' */}
      {categories.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={c.name === "food" ? "/" : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

// 방법1 : state 끌어올리기, 부모 에서 정의한 함수(내용은 세터함수. )
// const Categories = ({ onSelect, category }) => {
//   return (
//     <CategoriesBlock>
//       {/* c -> name: 'food', text: '부산맛집정보 서비스' */}
//       {categories.map((c) => (
//         <Category
//           key={c.name}
//           active={category === c.name}
//           onClick={() => onSelect(c.name)}
//         >
//           {c.text}
//         </Category>
//       ))}
//     </CategoriesBlock>
//   );
// };

export default Categories;
