import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { HomePage, SubPage1 } from './components/HomePage';

import {
  HashRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/subpage'>Subpage</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/subpage'>
              <SubPage1 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
