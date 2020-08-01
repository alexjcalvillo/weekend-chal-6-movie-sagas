import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

class Details extends Component {
  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: this.props.match.params.id,
    });
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  render() {
    const movieTitles = this.props.movies.map((movie, index) => {
      return movie.title;
    });
    console.log(movieTitles);
    const movie = this.props.movies.filter((movie, index) => {
      return (movie.title = this.props.genres.title);
    });
    console.log(movie);
    return (
      <div>
        <h1>Welcome to the details page!</h1>

        <ul>
          {this.props.genres.map((movie, index) => {
            return <li key={index}>{movie.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    movies: store.movies,
    genres: store.genres,
  };
};
export default connect(mapStoreToProps)(Details);
