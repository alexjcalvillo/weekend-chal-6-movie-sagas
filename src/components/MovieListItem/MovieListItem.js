import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MovieListItem extends Component {
  openDetails = (id) => (event) => {
    console.log('opening the details for this item:', id);
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: id,
    });
  };

  render() {
    return (
      <div className="container">
        <li>
          <h1>{this.props.movie.title}</h1>
          <Link to={`/details/${this.props.id}`}>
            <img
              onClick={this.openDetails(this.props.id)}
              src={this.props.movie.poster}
              alt={`post for ${this.props.movie.title}`}
            />
          </Link>
          <br />
          {this.props.movie.description}
        </li>
      </div>
    );
  }
}

export default connect()(MovieListItem);
