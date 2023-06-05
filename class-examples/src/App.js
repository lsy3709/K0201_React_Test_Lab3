import logo from './logo.svg';
import { useState,useCallback } from 'react';
import './App.css';
import Categories from './ch17-pdtest/Components/Categories';
import ItemList from './ch17-pdtest/ItemList';

function App() {
  const [category, setCategory] = useState('food')
const onSelect = useCallback(category => setCategory(category),[])
  return (
    <div>
     <Categories category={category} onSelect={onSelect}/>
    <ItemList category={category}/>
    </div>
  );
}

export default App;
