import React from 'react';
// 문제점1
//react-dom/client 하위에는 render 라는 함수가 없음. 
// react-dom 고쳐야 함. 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfirmDialog from './ch4/ConfirmDialog';
// 문제점2 . 해당 함수형 컴포넌트 이름 첫글자 대문자로 변경하라고 
import Tick from './ch4/Tick';

//setInterval(콜백함수, 시간(ms)) -> 특정 시간마다, 첫번째 매개변수에서 
// 정의한 함수가 실행한다. 
// ReactDOM.render(그려지는 요소, 어디 밑에 그릴거야.)
const test = () => {
  ReactDOM.render(
    <React.StrictMode>
    <Tick/>
  </React.StrictMode>,
  document.getElementById('root')
  );
}
setInterval(test , 1000);
 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
