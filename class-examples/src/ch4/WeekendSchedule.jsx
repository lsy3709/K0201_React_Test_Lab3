import React from "react";

const WeekendSchedule = (props) => {
  return (
    <div>
      <h1>이번주 주말 일정 계획</h1>
      <h2>토요일 일정 :{props.sat} </h2>
      <h2>일요일 일정 :{props.sun} </h2>
    </div>
  );
};

export default WeekendSchedule;
