import logo from './logo.svg';
import { useState,useCallback } from 'react';
import './App.css';
import Categories from './ch17-pdtest/Components/Categories';
import ItemList from './ch17-pdtest/ItemList';
import ItemsPage from './ch17-pdtest/pages/ItemsPage';
// 페이징 라우팅 하기 위해서 임포트 필요. 
import {Route,Routes} from 'react-router-dom';

function App() {
  //현재, 공통 state , 부모 컴포넌트인 App.js 에서 관리하고 있고, 
  // props 로 -> 자식 컴포넌트인 ItemList.jsx -> 전달.
  // 자식 컴포넌트인 Categories.jsx -> 부모쪽으로 state 끌어올리기. (자식에서 부모의 세터 함수를 호출. )
  
  // 방법1
//   const [category, setCategory] = useState('food')
// const onSelect = useCallback(category => setCategory(category),[])
//return (
//   <div>
//   <Categories category={category} onSelect={onSelect}/>
//  <ItemList category={category}/>
//  </div>
// );

// 방법2 페이지 라우팅. 
  return (
    <Routes>
      <Route path="/" element={<ItemsPage/>}/>
      <Route path="/:category" element={<ItemsPage/>}/>
    </Routes>
  );
}

export default App;
