import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Welcome from './components/welcome/Welcome';
import NotFound from './components/not-found/NotFound';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Switch>
            <Route 
                exact
                path="/"
                render={props => <Welcome {...props} name="Friend"/>}
            />
            
            <Route
                exact
                path="/welcome/:name"
                render={props => <Welcome {...props} name={props.match.params.name}/>}
            />
            
            <Route exact path="/clock" component={Clock} />
            
            <Route exact path="/contact" component={Contact} />
            
            <Route component={NotFound} />
        </Switch>
    </div>
  );//end return JSX
}//end App

export default App;
