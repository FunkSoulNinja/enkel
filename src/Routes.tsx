import React from 'react'
import { Route, Switch } from 'react-router-native'

import Home from './views/Home'
import AddTask from './views/AddTask'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/add-task" component={AddTask} />
  </Switch>
)

export default Routes
