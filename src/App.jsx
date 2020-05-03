import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Alarm from './sections/Alarm/Alarm';
import Clock from './sections/Clock/Clock';
import Stopwatch from './sections/Stopwatch/Stopwatch';
import Timer from './sections/Timer/Timer';
import Setting from './sections/Setting/Setting';
import './App.scss';

function App({ location: { pathname } }) {
  return (
    <div className="App">
      <div className="container">
        {pathname === '/setting' ? null : <Navigation />}
        <Switch>
          <Route exact path="/" component={Alarm} />
          <Route exact path="/clock" component={Clock} />
          <Route exact path="/stopwatch" component={Stopwatch} />
          <Route exact path="/timer" component={Timer} />
          <Route exact path="/setting" component={Setting} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
