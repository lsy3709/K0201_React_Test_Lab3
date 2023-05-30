//MenuItem.jsx : 자식
// 연습, 1) 부모 -> 자식 : props
// 2) state 상태 사용 연습
// 3) 생명주기 , 마운트, 업데이트 , 언마운트
//rcc -> 클래스 컴포넌트 형태 자동완성.
import React, { Component } from "react";

const styles = {
  // 요소의 바깥부분의 스타일
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    //기본 flex 옵션은 row , 가로 방향 배치,
    // 안드로이드 리니어 레이아웃과 비슷,
    flexDirection: "row",
    border: "1px solid grey",
    // 원래 해당 css 요소의 속성을 나타낼 때,  border-radius
    // 리액트의 jsx 요소에서는 해당 속성은 카멜 케이스로 표기 : borderRadius
    borderRadius: 16,
  },
  // 특정 메세지 창의 스타일
  messageText: {
    color: "green",
    fontSize: 28,
  },
};

class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noti2: [],
    };
  }
  //자식 부분에서 각 생명주기 함수들 콘솔로 찍어서 확인해보기.
  componentDidMount() {
    console.log("componentDidMount() 호출이 되었음.");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() 호출이 되었음.");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount() 호출이 되었음.");
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default MenuItem;
