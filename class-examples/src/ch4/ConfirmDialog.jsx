//ConfirmDialog.jsx
// Reactjs code snipet 이용해서
// 단축키 처럼 : rsc 입력하면, 자동으로 함수형 컴포넌트 화살표 함수로 만들어줌.
import React from "react";
import Button from "./Button";

const ConfirmDialog = () => {
  return (
    <div>
      <p>내용확인</p>
      <Button color="green">확인</Button>
      <Button color="red">확인2</Button>
    </div>
  );
};

export default ConfirmDialog;
