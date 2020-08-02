import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './EditMode.module.css';

class EditMode extends Component {
  state = {
    movie: {
      genres: [],
    },
    movieUpdated: {
      title: '',
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
    this.setState(
      {
        movie: currentMovie,
      },
      () => {
        console.log(this.state.movie);
      }
    );
  }

  handleChange = (fieldKey) => (event) => {
    this.setState({
      movieUpdated: {
        [fieldKey]: event.target.value,
      },
    });
  };

  clickSave = () => {
    console.log('in clickSave');
  };
  render() {
    const genresArray = this.state.movie.genres
      ? this.state.movie.genres.map((item, index) => {
          return <li key={index}>{item}</li>;
        })
      : [];
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
