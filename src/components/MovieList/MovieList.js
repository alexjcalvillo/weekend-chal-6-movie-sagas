import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map((movie, index) => {
          return (
            <MovieListItem
              key={index}
              movie={movie}
              openDetails={this.props.openDetails}
            />
          );
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
