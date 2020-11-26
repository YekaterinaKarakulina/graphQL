import React from "react";

const Header = (props) => {
  const handleClick = () => {
    console.log("Header click");
    console.log(props);
  };

  return (
    <div className="header">
      header
      <button type="button" onClick={handleClick}>
        button
      </button>
    </div>
  );
};

export default React.memo(Header);
