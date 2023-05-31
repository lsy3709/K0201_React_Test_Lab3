//Counter.jsx
// rsc
import React, { useState } from "react";

//function counter(props) { } : 기본형
// 화살표 함수형
// props 역할: 데이터 전달. 무조건: 부모 -> 자식
// 부모 -> 자식 계층, 부모1->자식1(부모2)->자식2(부모3)->자식3
// 단점, 만약, 부모1에서 특정 props , 자식 3에게 전달 하려면,
// 몇번을 거쳐서 전달이 되느냐? 3번을 거쳐서 전달이 됩니다.
const Counter = (props) => {
  const [count, setCount] = useState(0);
  // setCount -> 세터, 무조건 이 함수를 이용해야 변경이 됩니다. 주의하기.!!!!
  //   var count = 0;

  //클래스 형 컴포넌트에서는 바로 생명주기 확인 가능.
  // 하지만, 함수형 컴포넌트에서는 바로 사용이 안되고,
  // 대신에, 훅스, useEffect를 이용해서, 구현 할수 있음.
  // 다음 내용에 같이 사용할게요.

  return (
    <div>
      <p>총 : {count}번 클릭 했음.</p>
      {/* <button onClick={() => count++}>클릭</button> */}
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default Counter;
