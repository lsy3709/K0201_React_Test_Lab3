//Comment.jsx
import React from "react";
// 자식 컴포넌트
// 현재 폴더 위치는 src/ch5/ 여기에 사진 파일이 있음.
// ./ 현재 폴더 위치를 의미.
import logo from "./lavar.png";
import AvatarImg from "./AvatarImg";

const styles = {
  wrapper: {
    margin: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    boderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    boderRadius: 25,
  },
  contentContainer: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 18,
  },
};

const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnFUycFr3ykvWaWp67PYuh-2QVb5xW_Cf17ii7mJ6iQ&s"
          alt="라바"
          style={styles.image}
        /> */}
        {/* <img src={logo} alt="로컬사진" style={styles.image} /> */}
        <AvatarImg src={logo} alt="사진1" style={styles.image} />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment} </span>
      </div>
    </div>
  );
};

export default Comment;
