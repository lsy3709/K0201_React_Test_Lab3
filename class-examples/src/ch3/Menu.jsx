//부모 컴포넌트
import React from 'react';
import KoreanFood from './KoreanFood';

function Menu(props) {
  return (
    <>
      <KoreanFood name="설렁탕" cost={9000} />
      <KoreanFood name="돼지국밥" cost={8500} />
    </>
  );
}
export default Menu;
