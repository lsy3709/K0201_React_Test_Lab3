// 건너가는 작업. useState, useCallback
//useCallback -> 업데이트시 매번 함수가 새롭게 생성되면, 된다? 안된다. 
// useCallback(콜백함수, 의존성배열) -> 의존성 배열 3가지. : 빈 배열. 

//추가 라우팅 : 
// 간단 설명. route(길), router(길 안내자.) , routing(길 안내를 한다. )
// URL 라우팅 -> 페이징 라우팅 
// ex) https://www.eaxmple.com : 호스트 서버 
// ex2) https://www.eaxmple.com/tests -> /tests : path
// BrowserRouter -> 웹 브라우저의 히스토리 기능을 이용해서, 페이지 라우팅 하는 형식임. 
// Routes, Route
import {BrowserRouter} from 'react-router-dom'

import React, {useState, useCallback} from 'react';

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
import WeekendSchedule from './ch4/WeekendSchedule';
import MyTest1 from './ch4/MyTest1';
import CommentList from './ch5/CommentList';
import NotiList from './ch6/NotiList';
import MenuItemList from './ch6-2/MenuItemList';
import TestSample from './ch6-3insert_delete/TestSample';
import Counter from './ch7/Counter';
import TestBefore from './ch7-2-useMemo/TestBefore';
import TestAfter from './ch7-2-useMemo/TestAfter';
import BeforeUseCallback from './ch7-3-useCallback/BeforeUseCallback';
import AfterUseCallback from './ch7-3-useCallback/AfterUseCallback';
import TextInputTest from './ch7/TextInputTest';
import Toggle from './ch8/Toggle';
import FileImageTest from './ch11/FileImageTest';
import NameForm from './ch11/NameForm';
import TestNullValue from './ch11/TestNullValue';
import Calc from './ch12/Calc';
import WelcomeDialog from './ch13/WelcomeDialog';
import Main from './ch14/Main';
import MainPage from './ch15/MainPage';
import Sample from './ch15/Sample';
import CallbackTest2 from './ch17-pdtest/CallbackTest2';
import ItemList from './ch17-pdtest/ItemList';
import Categories from './ch17-pdtest/Components/Categories';

// 생명주기를 테스트를 하는 코드에서, React.StrictMode 제거하고 실행하는게 가독성면에서 좋습니다. 
// 수행이 2번씩 일어남. 

// 훅스 최고 부모에서 정의를 해야하고, 
// 현재 상태는, 최고 부모 없음, 
// App.js (최고 부모) -> 1) Categories 2) ItemList
// const [category, setCategory] = useState('food')
// const onSelect = useCallback(category => setCategory(category),[])

// 순서2 , 위에서 설정한 BrowserRouter 를 
// 최고 부모의 컴포넌트를 감싸면 됩니다. 
//라우팅시 
ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
   ,
  document.getElementById('root')
);
// setTimeout(() =>{
//   ReactDOM.render(<input value={null}/>,document.getElementById('root'))
// },1000)

//setInterval(콜백함수, 시간(ms)) -> 특정 시간마다, 첫번째 매개변수에서 
// 정의한 함수가 실행한다. 
// ReactDOM.render(그려지는 요소, 어디 밑에 그릴거야.)
// const test = () => {
//   ReactDOM.render(
//     <React.StrictMode>
    {/* <Tick/>
    <WeekendSchedule sat="육아 및 집안일 " sun="티비 보면서 육아 및 집안일"/>
    <WeekendSchedule sat="222 " sun="3333"/> */}
    {/* <MyTest1  number={7}>
      child 영역입니다.
    </MyTest1> */}

//   </React.StrictMode>,
//   document.getElementById('root')
//   );
// }
// setInterval(test , 1000);
 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
