//BeforeUseCallback.jsx
//사용 전 문제점 제시
import React, { useState } from "react";
//집합 -중복 안됩니다.
const test = new Set();

const BeforeUseCallback = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const printLog = () => console.log("재실행되는 printLog 함수.");
  test.add(printLog);
  console.log(test);
  return <div></div>;
};

export default BeforeUseCallback;
