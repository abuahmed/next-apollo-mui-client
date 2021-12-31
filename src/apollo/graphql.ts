import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { cache } from "./cache";

const httpLink = createHttpLink({
  //uri: `https://estockserver.pinnasofts.com/graphql` as any,
  uri: `http://localhost:5500/graphql` as any,
});

const authLink = setContext((_, { headers }) => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null;
  const token = userInfo ? userInfo.token : null;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  connectToDevTools: true,
});
