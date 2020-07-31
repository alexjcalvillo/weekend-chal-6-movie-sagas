import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }
  render() {
    return (
      <div>
        <h1>This is the home page.</h1>
        <ul>
          <MovieList movies={this.props.movies} />
        </ul>
      </div>
    );
  }
}

export default connect()(Home);
