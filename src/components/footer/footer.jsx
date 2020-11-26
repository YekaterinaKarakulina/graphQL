/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from "react";
import importComponent from "../../utils/dynamic-import";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Footer click");
    console.log(this.props);
  }

  render() {
    const { nestedComponents } = this.props;
    let nested;
    if (nestedComponents) {
      nested = nestedComponents.items.map(
        ({ path, props, nestedComponents, id }) =>
          importComponent(path, props, nestedComponents, id)
      );
    }

    return (
      <div className="footer">
        footer
        {nested}
        <button type="button" onClick={this.handleClick}>
          button
        </button>
      </div>
    );
  }
}

export default React.memo(Footer);
