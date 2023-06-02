import React from "react";

//순서1 설정:컨텍스트 객체
// 이름 , 기본값은 null
const TestContext2 = React.createContext(null);
TestContext2.displayName = "context2";

export default TestContext2;
