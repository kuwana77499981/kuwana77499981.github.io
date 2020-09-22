import React, { Component, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  HashRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom'

const HomePage = React.lazy(() => import('./components/HomePageComponent'));
const SubPage1 = React.lazy(() => import('./components/SubPageComponent'));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route path='/subpage'>
                <SubPage1 />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}
export default App;
