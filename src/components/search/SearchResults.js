import React from 'react';
import PropTypes from 'prop-types';
import MovieResultItem from '../movies/MovieResultItem';
import MovieResultEmpty from '../movies/MovieResultEmpty';

const SearchResults = ({movieData, handleMovieSelect}) => {
  return (
    <>
      <div className="row">
        {movieData.total > 0 ? (movieData.data.map(
            mov => <MovieResultItem key={mov.id} {...mov} handleMovieSelect={handleMovieSelect}/>))
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
  }),
  handleMovieSelect: PropTypes.func
};

export default SearchResults;
