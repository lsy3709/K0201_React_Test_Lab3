import React from "react";
//함수형 컴포넌트 형식으로 추출.
// 하나의 조각이 되어서, 다른 컴포넌트에서도 재사용이 가능합니다.
const AvatarImg = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} style={props.style} />
    </div>
  );
};

export default AvatarImg;
