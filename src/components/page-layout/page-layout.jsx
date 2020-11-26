import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PAGE_LAYOUT } from "../../graphql/queries";
import importComponent from "../../utils/dynamic-import";

const PageLayout = () => {
  const { data } = useQuery(GET_PAGE_LAYOUT);
  console.log(data);
  if (!data) {
    return <div>-------</div>;
  }

  // const data = [
  //   {
  //     name: "Header",
  //     path: "components/header",
  //   },
  //   {
  //     name: "Footer",
  //     path: "components/footer",
  //   },
  // ];
  // console.log(data);

  // if (loading)
  //   return (
  //     <span role="img" aria-label="">
  //       Loading... 🐱‍👤
  //     </span>
  //   );
  // if (error)
  //   return (
  //     <span role="img" aria-label="">
  //       🤔
  //     </span>
  //   );

  return (
    <div>
      {data.pageLayoutsList.items.map(({ path, props, nestedComponents, id }) =>
        importComponent(path, props, nestedComponents, id)
      )}
    </div>
    // <div>{data.map(({ path }) => importComponent(path))}</div>
  );
};

export default React.memo(PageLayout);
