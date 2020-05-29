import React from 'react';
import PropTypes from 'prop-types';

const MovieResultItem = ({ id, title, release_date, poster_path, genres, handleMovieSelect }) => {
  return (
    <div id={id} className="card col-lg-4">
        <img className="card-img-top"
          alt={`Picture for movie: ${title}`}
          src={poster_path}
             onClick={() => handleMovieSelect(id)}
        />
      <div className="card-body">
        <div className="card-title">
          <span className="h4">{title}</span>
          <span className="border border-dark rounded float-right p-1">{release_date.slice(0, 4)}</span>
        </div>
        <div>{genres.join(' & ')}</div>
      </div>
    </div>
  );
};

MovieResultItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  handleMovieSelect: PropTypes.func
};

export default MovieResultItem;