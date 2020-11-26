/* eslint-disable react/prop-types */
import React from "react";

const App = (props) => {
  console.log(props);
  const { children } = props;
  return (
    <div>
      App component
      {children}
    </div>
  );
};

/* Layout */
// const App = () => {
//   return <PageLayout />;
// };

/* Class import */

// const App = () => {
//   const getSomeClass = async () => {
//     const module = await import("../../utils/class-export");
//     const classInstance = new module.default("SomeName");
//     classInstance.sayHi();
//   };
//   getSomeClass();
//   return <div>App</div>;
// };

/* default import */

// const App = () => {
//   const getDefaultExport = async () => {
//     const module = await import("../../utils/default-export");
//     console.log(`addResult ${module.default.add(2, 5)}`);
//     console.log(`multiplyResult ${module.default.multiply(2, 5)}`);
//   };
//   getDefaultExport();
//   return <div>App</div>;
// };

/* separate functions import (async-await) */

// const App = () => {
//   const getSeparateExport = async () => {
//     const module = await import("../../utils/separate-export");
//     console.log(`Hi function: ${module.hi()}`);
//     console.log(`Goodbye function: ${module.goodbye()}`);
//   };
//   getSeparateExport();
//   return <div>App</div>;
// };

/* separate functions import (then) */

// const App = () => {
//   import("../../utils/separate-export").then((module) => {
//     console.log(`Hi function: ${module.hi()}`);
//   });

//   return <div>App</div>;
// };

export default React.memo(App);
