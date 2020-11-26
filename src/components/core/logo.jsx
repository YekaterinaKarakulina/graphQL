import React from "react";

const Logo = (props) => {
  console.log(props);
  return <div className="logo">logo</div>;
};

export default React.memo(Logo);
