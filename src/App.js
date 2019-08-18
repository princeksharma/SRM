import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/profile/Profile';
import Admin from './components/admin/Admin';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App"> 
        <Navbar/>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/admin" component={Admin}/>
      </div>
      </Router>
    )
  }
}

export default App;
