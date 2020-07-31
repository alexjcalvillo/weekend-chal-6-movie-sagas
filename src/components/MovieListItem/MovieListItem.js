import React, { Component } from 'react';

class MovieListItem extends Component {
  render() {
    return (
      <div>
        <h1>This is the move list ITEM page</h1>
        <li>
          {this.props.movie.title}
          {this.props.movie.description}
          <img
            src={this.props.movie.poster}
            alt={`post for ${this.props.movie.title}`}
          />
        </li>
      </div>
    );
  }
}

export default MovieListItem;
