//MenuItemList.jsx : 부모

import React, { Component } from "react";
import MenuItem from "./MenuItem";

const reserveNoti2 = [
  { id: 1, message: "점심 메뉴1" },
  { id: 2, message: "점심 메뉴2" },
  { id: 3, message: "점심 메뉴3" },
  { id: 4, message: "점심 메뉴4" },
];

var timer;

class MenuItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noti2: [],
    };
  }

  // 마운트가 실행 후, 진행되는 메서드.
  componentDidMount() {
    const { noti2 } = this.state;
    timer = setInterval(() => {
      // noti 라는 빈배열이 기존의 예약된 배열의 길이보다 작으면
      // 무조건 실행.
      if (noti2.length < reserveNoti2.length) {
        // 현재 index 는 noti의 빈배열의 길이 : 0
        const index = noti2.length;
        // noti 배열의 내장 함수 push(=add) 추가.
        // 빈 배열 noti에 구성요소로 예약된 더미 데이터(3개)
        // noti = [{ message: "메세지1" }]
        noti2.push(reserveNoti2[index]);
        //noti 는 배열에 요소가 추가되었음.
        this.setState({
          // p,s,부, 강 -> 업데이트가 발생. -> 다시 그려진다. -> 부모-> 자식 새로 그린다.
          // 빈 배열에 , 요소가 하나가 추가된 배열이 재할당.
          noti2: noti2,
        });
      } else {
        // noti라는 빈배열에 요소를 3개 까지 추가 가능, 그 3개 초과 되면
        // 이 함수가 호출.
        // timer : setInterval  함수.
        // clearInterval(timer);

        //componentWillUnmount 콘솔에 띄우기 위해서, 해당 데이터를 비워 주는 작업.
        // 데이터가 비워지면, 해당 컴포넌트가 그릴게 없어서,  사라진다.
        // 소멸 하기 전에 위에 메서드가 호출이 됨. componentWillUnmount()
        this.setState({
          //처음에 noti 빈 배열 -> 요소를 3개 추가하고 -> 3개 초과이면, 배열을 비우기. -> 빈 배열 할당.
          noti2: [],
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {/* map 함수는 배열의 내장 함수이구요. 
          배열의 요소를 하나씩 꺼내어서, 특정 작업을 수행 후, 새로운 배열을 생성하는 함수. */}
        {/* 예를들어 , 
          noti : 빈배열 , -> 배열에 요소를 추가 push , 객체를 요소로 (message) 추가. 
          noti = [  { message: "메세지1" },  { message: "메세지2" },  { message: "메세지3" },] */}

        {/* 부모에서 자식으로 props 설정, 여기에서 해당 요소에 키 값을 설정함.  */}
        {/* 현재, props 로 요소로 message 하나 만 있는데, 추가로 키도 같이 설정. , id도 같이 설정. 
  id를 키 요소의 값으로 사용될 예정.  */}
        {this.state.noti2.map((noti) => {
          return <MenuItem key={noti.id} id={noti.id} message={noti.message} />;
        })}
      </div>
    );
  }
}

export default MenuItemList;
