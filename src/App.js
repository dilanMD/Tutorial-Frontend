import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Tutorials from './components/Tutorials';
import Tutors from './components/Tutors';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/tutorials' component={Tutorials} />
          <Route exact path='/tutors' component={Tutors} />
      </Switch>
    </div>
  );
}

export default App;
