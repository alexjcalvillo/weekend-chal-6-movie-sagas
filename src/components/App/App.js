import React, { Component } from 'react';
import './App.css';

// import components to use on app
import Home from '../Home/Home';
import Details from '../Details/Details';

// import stuff we need
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Details} />
        </Router>
      </div>
    );
  }
}

export default App;
