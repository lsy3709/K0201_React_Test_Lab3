//CommentList.jsx
import React from "react";
import Comment from "./Comment";
//부모 컴포넌트
const CommentList = (props) => {
  return (
    <div>
      {/* 업데이트 -> render -> 다시 그린다. 
      다시 그리는 경우 -> 업데이트라고 이야기함. 
      업데이트 조건 -> p,s , 부,강
      1) p : props 바뀔때. 2) s : state 상태 변경시, 
      3) 부모가 업데이트 될 경우 4) 강 : 강제로 업데이트 메서드 호출시 */}
      {/* 자식 컴포넌트에 props 로 데이터를 전달함. name, comment 속성을 전달함. 자식 컴포넌트 */}
      <Comment name="이상용" comment="댓글1" />
      <Comment name="이상용2" comment="댓글2" />
    </div>
  );
};

export default CommentList;
