import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Details.module.css';

// import Material-UI assets
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const genresArray = this.state.movie.genres
      ? this.state.movie.genres.map((item, index) => {
          return <p key={index}>{item} | </p>;
        })
      : [];
    return (
      <div>
        <button className={styles.backbtn} onClick={this.goBack}>
          <ArrowBackIcon />
          Back
        </button>
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

              <button className="btn" onClick={this.clickEdit}>
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="12px"
                  height="12px"
                >
                  {' '}
                  <path d="M 16.9375 1.0625 L 3.875 14.125 L 1.0742188 22.925781 L 9.875 20.125 L 22.9375 7.0625 C 22.9375 7.0625 22.8375 4.9615 20.9375 3.0625 C 19.0375 1.1625 16.9375 1.0625 16.9375 1.0625 z M 17.3125 2.6875 C 18.3845 2.8915 19.237984 3.3456094 19.896484 4.0214844 C 20.554984 4.6973594 21.0185 5.595 21.3125 6.6875 L 19.5 8.5 L 15.5 4.5 L 16.9375 3.0625 L 17.3125 2.6875 z M 4.9785156 15.126953 C 4.990338 15.129931 6.1809555 15.430955 7.375 16.625 C 8.675 17.825 8.875 18.925781 8.875 18.925781 L 8.9179688 18.976562 L 5.3691406 20.119141 L 3.8730469 18.623047 L 4.9785156 15.126953 z" />
                </svg>
                Edit
              </button>
            </div>
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