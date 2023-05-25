import React from 'react';
import Book from './Book';

function Library(props) {
  // Library , 함수형 컴포넌트를 만들었고,
  // 여기에 아까 만들었던, Book 컴포넌트를 사용하는 예제 코드.
  return (
    <div>
      <Book name="이상용1" numOfPage={100} />
      <Book name="이상용2" numOfPage={200} />
      <Book name="이상용3" numOfPage={300} />
      <Book name="이상용4" numOfPage={400} />
    </div>
  );
}
export default Library;
