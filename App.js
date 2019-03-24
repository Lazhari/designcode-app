import React from "react";

import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import AppNavigator from "./navigator/AppNavigator";
import store from "./store";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjtmwchp79gll01b92msuwqcb/master",
  credentials: "same-origin"
});

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;
