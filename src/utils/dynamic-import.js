import React, { Suspense } from "react";

function importComponent(componentPath, props, nestedComponents, id) {
  const Component = React.lazy(() => import(`src/${componentPath}`));
  const params = {
    ...props,
    nestedComponents,
  };
  return (
    <div key={id}>
      <Suspense fallback={<div>...</div>}>
        <Component {...params} />
      </Suspense>
    </div>
  );
}

// function importComponent(componentPath) {
//   console.log(componentPath);
//   const Component = React.lazy(() => import(`src/${componentPath}`));

//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Component />
//       </Suspense>
//     </div>
//   );
// }

export default importComponent;
