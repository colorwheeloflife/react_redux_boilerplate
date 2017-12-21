import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </main>
    );
  }
}

export default App;
