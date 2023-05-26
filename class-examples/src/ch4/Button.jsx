//Button.jsx
//함수형 컴포넌트인데, 함수모양, 기존의 함수 키워드사용.
import React from "react";

function Button(props) {
  return (
    // class-name -> jsx 문법에서 카멜 표기법 표시.
    <button className={`bg-${props.color}`}>
      <b>{props.children}</b>
    </button>
  );
}

export default Button;
