import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  state = {
    movie: {
      genres: [],
    },
  };
  componentDidMount() {
    console.log(this.props.match.params.id);
    const currentId = Number(this.props.match.params.id);
    console.log(currentId);

    let currentMovie = {};
    for (let movie of this.props.movies) {
      if (currentId === movie.id) {
        currentMovie = movie;
      }
    }
    console.log(currentMovie);
    this.setState({
      movie: currentMovie,
    });
  }

  clickEdit() {
    console.log('in click edit');
    this.props.history.push('/editmode');
  }

  render() {
    const genresArray = this.state.movie.genres
      ? this.state.movie.genres.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      : [];
    return (
      <div>
        <h1>Welcome to the details page!</h1>
        <h1>{this.state.movie.title}</h1>
        <img src={this.state.movie.poster} />
        <h5>Genres: {genresArray}</h5>
        <button onClick={this.clickEdit}>Edit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    movies: store.movies,
  };
};
export default connect(mapStoreToProps)(Details);
