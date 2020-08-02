import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './EditMode.module.css';

class EditMode extends Component {
  state = {
    movie: this.props.movies[this.props.match.params.id],
    // new movie state for the PUT changes to database while
    // maintaining the poster on the screen
    movieUpdated: {
      title: '',
      description: '',
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
  }

  // currying to handle both input for title and textarea for description
  handleChange = (fieldKey) => (event) => {
    this.setState({
      movieUpdated: {
        ...this.state.movieUpdated,
        [fieldKey]: event.target.value,
      },
    });
  };

  clickCancel = () => {
    this.props.history.goBack();
  };

  // capture edited fields and dispatch for server/db update
  clickSave = () => {
    console.log('in clickSave');
    this.updateMovie();
    this.props.history.push('/');
  };

  updateMovie() {
    this.props.dispatch({
      type: 'UPDATE_MOVIE',
      payload: { ...this.state.movieUpdated, id: this.state.movie.id },
    });
  }

  render() {
    return (
      <div>
        <div className={styles.containerDetail}>
          <div className={styles.title}>
            <h1>
              <input
                type="text"
                placeholder="title"
                onChange={this.handleChange('title')}
              />
            </h1>
          </div>
          <div className={styles.row}>
            <img
              src={this.state.movie.poster}
              alt={`a poster cover for the movie ${this.state.movie.title}`}
            />
            <ul>
              <li>
                Description:{' '}
                <textarea
                  onChange={this.handleChange('description')}
                ></textarea>
              </li>
            </ul>
            <button onClick={this.clickCancel}>Cancel Changes</button>
            <button onClick={this.clickSave}>Save Changes</button>
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
export default connect(mapStoreToProps)(EditMode);
