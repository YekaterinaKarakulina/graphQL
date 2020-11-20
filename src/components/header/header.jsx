import React from "react";

const Header = () => {
  const handleClick = () => {
    console.log("Header click");
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
