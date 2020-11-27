import React, { Suspense } from "react";

const withDynamic = (Component, data) => {
  return () => {
    console.log(data);

    return (
      <Component>
        {data.map(({ name, path, props }) => {
          const NewComponent = React.lazy(() => import(`src/${path}`));
          return (
            <div key={name}>
              <Suspense fallback={<div>Loading ...</div>}>
                <NewComponent {...props} />
              </Suspense>
            </div>
          );
        })}
      </Component>
    );
  };
};

export default withDynamic;

// ----------------------------------- //

// import { lazy } from "@loadable/component";

// const withDynamic = (Component, data) => {
//   return () => {
//     console.log(data);

//     return (
//       <Component>
//         {data.map(({ name, path, props }) => {
//           const NewComponent = lazy(() => import(`src/${path}`));

//           return (
//             <div key={name}>
//               <Suspense fallback={<div>Loading ...</div>}>
//                 <NewComponent {...props} />
//               </Suspense>
//             </div>
//           );
//         })}
//       </Component>
//     );
//   };
// };

// export default withDynamic;

// ----------------------------------- //

// import React from "react";
// import loadable from "@loadable/component";

// const withDynamic = (Component, data) => {
//   return () => {
//     console.log(data);

//     return (
//       <Component>
//         {data.map(({ name, path, props }) => {
//           const NewComponent = loadable(() => import(`src/${path}`));

//           return (
//             <div key={name}>
//               <NewComponent {...props} fallback={<div>Loading ...</div>} />
//             </div>
//           );
//         })}
//       </Component>
//     );
//   };
// };

// export default withDynamic;
