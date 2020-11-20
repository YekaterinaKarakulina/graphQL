import React, { Suspense } from "react";
import { useQuery } from "@apollo/client";
import { GET_PAGE_LAYOUT } from "../../graphql/queries";

const PageLayout = () => {
  const { error, loading, data } = useQuery(GET_PAGE_LAYOUT);

  if (loading)
    return (
      <span role="img" aria-label="">
        Loading... 🐱‍👤
      </span>
    );
  if (error)
    return (
      <span role="img" aria-label="">
        🤔
      </span>
    );

  function loadComponent(componentPath, id) {
    const Component = React.lazy(() => import(`src/${componentPath}`));

    return (
      <div key={id}>
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </div>
    );
  }

  return (
    <div>
      {data.pageLayoutsList.items.map(({ path, id }) =>
        loadComponent(path, id)
      )}
    </div>
  );
};

export default React.memo(PageLayout);
