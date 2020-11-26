import React from "react";

const Title = (props) => {
  console.log(props);
  return <div className="title">Title</div>;
};

export default React.memo(Title);
