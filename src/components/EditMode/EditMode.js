import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './EditMode.module.css';

// import Material-UI Assets
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

class EditMode extends Component {
  state = {
    movie: this.props.movies[this.props.match.params.id],
    // new movie state for the PUT changes to database while
    // maintaining the poster on the screen
    movieUpdated: {
      title: '',
      description: '',
      id: this.props.match.params.id,
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
    this.props.history.push(`/`);
  };

  updateMovie() {
    this.props.dispatch({
      type: 'UPDATE_MOVIE',
      payload: this.state.movieUpdated,
    });
  }

  render() {
    return (
      <div>
        <div className={styles.containerDetail}>
          <div className={styles.title}>
            <h1>
              <input
                className={styles.titleedit}
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
                <label htmlFor="description">Description: </label>
                <textarea
                  id="description"
                  className={styles.textareaEdit}
                  onChange={this.handleChange('description')}
                ></textarea>
              </li>
            </ul>
            <button className={styles.iconbtn} onClick={this.clickCancel}>
              <CancelIcon fontSize="small" />
              <span className="save-text">Cancel</span>
            </button>
            <button className={styles.iconbtn} onClick={this.clickSave}>
              <SaveIcon fontSize="small" />
              Save
            </button>
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
