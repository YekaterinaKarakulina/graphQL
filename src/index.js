import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import App from "./components/app";
import client from "./graphql/client";
import withDynamic from "./components/hoc/with-dynamic-import";

// from backend
const data = [
  {
    name: "Logo",
    path: "components/core/logo",
    props: {
      propLogo1: "some value",
      propLogo2: 11,
    },
    nestedComponents: [
      {
        name: "Contacts",
        path: "components/core/contacts",
      },
    ],
  },
  {
    name: "Title",
    path: "components/core/title",
    props: {
      propTitle1: "another value",
      propTitle2: {
        a: 1,
        b: 2,
      },
    },
  },
  {
    name: "Map",
    path: "components/core/map",
    props: {
      propMap: "extra",
    },
  },
];

const WrappedComponent = withDynamic(App, data);

ReactDOM.render(
  <ApolloProvider client={client}>
    <WrappedComponent />
  </ApolloProvider>,
  document.getElementById("root")
);
