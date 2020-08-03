import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieListItem.css';

class MovieListItem extends Component {
  componentDidMount() {
    console.log(this.props.movie);
  }
  render() {
    return (
      <div className="containerItem">
        <div className="movie-title">
          <h4>{this.props.movie.title}</h4>
        </div>
        <div className="movie-poster">
          <img
            onClick={this.props.openDetails(this.props.movie.id)}
            src={this.props.movie.poster}
            alt={`post for ${this.props.movie.title}`}
          />
        </div>
        {/* <p className="description">{this.props.movie.description}</p> */}
      </div>
    );
  }
}

export default connect()(MovieListItem);
