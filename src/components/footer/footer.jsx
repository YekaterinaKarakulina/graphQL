/* eslint-disable class-methods-use-this */
import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Footer click");
  }

  render() {
    return (
      <div className="footer">
        footer
        <button type="button" onClick={this.handleClick}>
          button
        </button>
      </div>
    );
  }
}

export default React.memo(Footer);
