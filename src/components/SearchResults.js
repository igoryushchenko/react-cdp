import React from 'react';
import PropTypes from 'prop-types';
import MovieResultItem from './MovieResultItem';
import MovieResultEmpty from './MovieResultEmpty';

const SearchResults = ({movieData}) => {
  return (
    <>
      <div className="row">
        {movieData.total > 0 ? (movieData.data.map(
            mov => <MovieResultItem key={mov.id} {...mov} />))
        : (<MovieResultEmpty />)
        }
      </div>
    </>
  );
};

SearchResults.propTypes = {
  movieData: PropTypes.shape({
    total: PropTypes.number,
    data: PropTypes.array
  })
};

export default SearchResults;
