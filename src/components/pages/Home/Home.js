import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../MovieList/MovieList';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  openDetails = (id) => (event) => {
    console.log('opening the details for this item:', id);
    this.props.history.push(`/details/${id}`);
  };

  render() {
    return (
      <div>
        <ul>
          <MovieList
            movies={this.props.movies}
            openDetails={this.openDetails}
          />
        </ul>
      </div>
    );
  }
}

export default connect()(Home);
