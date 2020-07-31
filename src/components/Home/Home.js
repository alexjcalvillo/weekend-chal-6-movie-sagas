import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          {this.props.movies.map((movie, index) => {
            return (
              <li>
                {movie.title}
                {movie.description}
                <img src={movie.poster} alt={`post for ${movie.title}`} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    movies: store.movies,
  };
};

export default connect(mapStoreToProps)(Home);
