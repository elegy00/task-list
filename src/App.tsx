import React, { Component } from 'react';
import DashboardPage from './components/pages/dashboard';
import SettingsPage from './components/pages/settings';
import Navigation from './components/organism/Navigation';

import { Router } from '@reach/router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <Router>
          <DashboardPage path="/"></DashboardPage>
          <SettingsPage path="settings"></SettingsPage>
        </Router>
      </div>
    );
  }
}

export default App;
