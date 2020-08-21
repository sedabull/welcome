import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Welcome from './components/welcome/Welcome';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Route 
            exact
            path="/"
            render={props => <Welcome {...props} name="Friend" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
    </div>
  );//end return JSX
}//end App

export default App;
