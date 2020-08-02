import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieListItem extends Component {
  componentDidMount() {
    console.log(this.props.movie);
  }
  render() {
    return (
      <div className="container">
        <li>
          <h1>{this.props.movie.title}</h1>
          <img
            onClick={this.props.openDetails(this.props.movie.id)}
            src={this.props.movie.poster}
            alt={`post for ${this.props.movie.title}`}
          />
          <br />
        </li>
      </div>
    );
  }
}

export default connect()(MovieListItem);
