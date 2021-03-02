import React from 'react';
import Header from './components/Header/Header.js'
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import LeaderboardPage from './pages/LeaderboardPage';
import InfoPage from './pages/InfoPage.js';
import InvalidPage from './pages/404.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/Leaderboard" component={LeaderboardPage} />
        <Route exact path="/Info" component={InfoPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/404" component={InvalidPage} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
