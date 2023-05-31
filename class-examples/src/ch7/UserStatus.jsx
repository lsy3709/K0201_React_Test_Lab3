//UserStatus.jsx

import React, { useState, useEffect } from "react";

const UserStatus = (props) => {
  // 온라인 여부를 상태로 확인 하는 작업.
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  const exFunc2 = () => {
    //ServerAPI.subscribeUserStatus(props.id, handleStatusChange);
    return () => {
      // 언마운트와 같은 효과를 준다.
      //ServerAPI.unsubscribeUserStatus(props.id, handleStatusChange);
    };
  };
  // 매번 업데이트 할 때마다, exFunc2 호출이 된다.
  useEffect(exFunc2);

  if (isOnline === null) {
    return "대기중 ...";
  }

  return isOnline ? "온라인" : "오프라인";
};

export default UserStatus;
