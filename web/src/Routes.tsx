import React from 'react';
import './assets/global.css';
import Choose from './pages/choose';
import PageOne from './pages/one';
import PageTwo from './pages/two';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Choose} />
          <Route exact path="/one" component={PageOne} />
          <Route exact path="/two" component={PageTwo} />
        </Switch>
    </Router>
  );
}

export default Routes;