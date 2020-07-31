import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {
  render() {
    return (
      <div>
        <h1>This is the List Page</h1>
        {this.props.movies.map((movie, index) => {
          return <MovieListItem key={movie.id} movie={movie} />;
        })}
      </div>
    );
  }
}
const mapStoreToProps = (store) => {
  return {
    movies: store.movies,
  };
};
export default connect(mapStoreToProps)(MovieList);
