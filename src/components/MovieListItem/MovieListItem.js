import React, { Component } from 'react';

class MovieListItem extends Component {
  render() {
    return (
      <div className="container">
        <li>
          <h1>{this.props.movie.title}</h1>
          <img
            src={this.props.movie.poster}
            alt={`post for ${this.props.movie.title}`}
          />
          <br />
          {this.props.movie.description}
        </li>
      </div>
    );
  }
}

export default MovieListItem;
