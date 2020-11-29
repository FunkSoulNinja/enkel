import React from 'react';
import { Route, Switch } from 'react-router-native';

import Home from './views/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
