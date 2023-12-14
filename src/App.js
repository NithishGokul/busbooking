// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Loginpg';
import Register from './components/Register';
import Sample from './components/Sample';
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route path='/Navigation' component={Navigation}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Sample} />
      </div>
    </Router>
  );
}

export default App;
