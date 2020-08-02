import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Details.module.css';

class Details extends Component {
  state = {
    movie: {
      genres: [],
    },
  };
  componentDidMount() {
    const currentId = Number(this.props.match.params.id);

    let currentMovie = {};
    for (let movie of this.props.movies) {
      if (currentId === movie.id) {
        currentMovie = movie;
      }
    }
    this.setState({
      movie: currentMovie,
    });
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  clickEdit = () => {
    console.log('in click edit');
    this.props.history.push(`/editmode/${this.state.movie.id}`);
  };

  render() {
    const genresArray = this.state.movie.genres
      ? this.state.movie.genres.map((item, index) => {
          return <p key={index}>{item}</p>;
        })
      : [];
    return (
      <div>
        <div className={styles.containerDetail}>
          <div className={styles.title}>
            <h1>{this.state.movie.title}</h1>
          </div>
          <div className={styles.row}>
            <img
              src={this.state.movie.poster}
              alt={`a poster cover for the movie ${this.state.movie.title}`}
            />
            <div className={styles.genreList}>
              <h3>Genres:</h3>
              {genresArray}
            </div>
            <div className={styles.description}>
              <p>{this.state.movie.description}</p>
            </div>
            <button onClick={this.clickEdit}>Edit</button>
          </div>
        </div>
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
