import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Details.css';

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
          return <li key={index}>{item}</li>;
        })
      : [];
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
        <div className="container-detail">
          <div className="row">
            <div className="col-lg-4">
              <img
                src={this.state.movie.poster}
                alt={`a poster cover for the movie ${this.state.movie.title}`}
              />
              <ul>
                Genres:
                {genresArray}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="genre-list">
                <p>{this.state.movie.description}</p>
              </div>
              <button onClick={this.clickEdit}>Edit</button>
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
