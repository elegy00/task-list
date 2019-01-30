import React, { Component } from "react";
import DashboardPage from "./components/pages/dashboard";
import SettingsPage from "./components/pages/settings";
import Navigation from "./components/organism/Navigation";

import { ApolloProvider } from "react-apollo";

import { Router } from "@reach/router";

import "./App.css";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "/graphql"
});

class App extends Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
          <Navigation />
          <Router>
            <DashboardPage path="/" />
            <SettingsPage path="settings" />
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
