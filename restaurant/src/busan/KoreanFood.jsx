//자식 컴포넌트

import React from 'react';

function KoreanFood(props) {
  return (
    <div>
      <h1>{`한식 점심은 : ${props.name}입니다.`}</h1>
      <h1>{`한식 점심 가격은 : ${props.cost}입니다.`}</h1>
    </div>
  );
}
export default KoreanFood;
