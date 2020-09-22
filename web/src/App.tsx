import React from 'react';
import './assets/global.css';
import PageOne from './pages/one';
import PageTwo from './pages/two';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/two" component={PageTwo} />
        </Switch>
    </Router>
  );
}

export default App;