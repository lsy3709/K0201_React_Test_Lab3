//TestSample.jsx
//테스트 간단히 데이터 추가 및 삭제 연습.
// 내장 함수의 응용 예제
// useState 활용 및 연습하기.

import React, { useState } from "react";

//함수형 컴포넌트라서, 클래스 형 컴포넌트 처럼, 상속, 생성자,슈퍼 라는 부분이 없음.
// 원래는 클래스형 컴포넌트에서만 생명주기 관련 함수가 있었는데,
// 16.8 버전 이후로부터는 hooks 라는 개념이 도입이 되어서, 클래스에서 할수없었던 작업을
// 함수형 컴포넌트에서도 가능함. -> 주로 함수형 컴포넌트로 작업을 많이 함.
// hooks 이후로는 거의 함수형으로 만 연습을 할 예정.
const TestSample = () => {
  // 비구조화 할당 방식으로, useState 가 함수가 실행 후 , 반환 값은
  // 1) 변수 값 2) 세터 함수 반환
  // 반환 형식은 배열 형식 [ 1), 2)]
  // names 데이터가 배열이 들어가 있음. 더미 데이터 4개 들어가 있음.
  const [names, setNames] = useState([
    { id: 1, text: "이상용1" },
    { id: 2, text: "이상용2" },
    { id: 3, text: "이상용3" },
    { id: 4, text: "이상용4" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  // names 라는 배열에 요소중에서 하나를 꺼낸 요소가 name이라고 보면 됩니다.
  // names 길이 :4 , 몇번 수행? 4번 수행을 합니다.
  // 수행의 결과는 li 라는 태그에 요소로 넣고 있음.
  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

  {
    /* <div> 라고 명시 해야 하지만, 생략시 <Fragment> 생략가능 -> <> 표기가능  */
  }
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default TestSample;
