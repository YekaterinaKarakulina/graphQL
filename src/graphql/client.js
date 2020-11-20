import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: "https://api.8base.com/ckhodeapv005107ky2pp8eezg",
  cache: new InMemoryCache(),
});
