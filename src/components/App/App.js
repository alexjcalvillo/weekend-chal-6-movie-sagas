import React, { Component } from 'react';
import './App.css';

import Swal from 'sweetalert2/src/sweetalert2.js';

// import components to use on app
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';
import EditMode from '../pages/EditMode/EditMode';

// import stuff we need
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/editmode/:id" component={EditMode} />
        </Router>
      </div>
    );
  }
}

export default App;
