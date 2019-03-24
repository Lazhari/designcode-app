import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// import HomeScreen from './screens/HomeScreen';
import AppNavigator from "./navigator/AppNavigator";

const initialState = {
  action: "",
  name: ""
};
const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjtmwchp79gll01b92msuwqcb/master",
  credentials: "same-origin"
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOSE_MENU":
      return { ...state, action: "closeMenu" };
    case "OPEN_MENU":
      return { ...state, action: "openMenu" };
    case "UPDATE_NAME":
      return { ...state, name: action.name };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;
