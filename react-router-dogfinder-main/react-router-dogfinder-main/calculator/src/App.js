// src/components/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Calculator from './Calculator';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/add/1/2">Add</Link>
            </li>
            <li>
              <Link to="/subtract/3/2">Subtract</Link>
            </li>
            <li>
              <Link to="/multiply/6/4">Multiply</Link>
            </li>
            <li>
              <Link to="/divide/20/5">Divide</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/add/:num1/:num2" render={({ match }) => <Calculator operation="add" {...match.params} />} />
          <Route path="/subtract/:num1/:num2" render={({ match }) => <Calculator operation="subtract" {...match.params} />} />
          <Route path="/multiply/:num1/:num2" render={({ match }) => <Calculator operation="multiply" {...match.params} />} />
          <Route path="/divide/:num1/:num2" render={({ match }) => <Calculator operation="divide" {...match.params} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
