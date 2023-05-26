//CommentList.jsx
import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  return (
    <div>
      <Comment name="이상용" comment="댓글1" />
      <Comment name="이상용2" comment="댓글2" />
    </div>
  );
};

export default CommentList;
