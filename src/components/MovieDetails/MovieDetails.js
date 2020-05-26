import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const MovieDetails = ({ title, poster_path, vote_average, tagline, release_date, overview, runtime, setShowMovieDetails }) => {

  const handleSearchClick = () => {
    setShowMovieDetails('');
  }

    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={poster_path} className="card-img" alt={`Poster picture for ${title} movie`} />
          </div>
          <div className="col-md-8">
            <div className="card-body card-details">
              <div className="card-title card-details-main">
                <span className="h4 pr-3">{title}</span>
                <span className="rounded-circle h4">{vote_average}</span>
                <span id="toggleSearch" className="float-right" onClick={handleSearchClick}><FaSearch /></span>
              </div>
              <p className="card-text"><small className="text-muted">{tagline}</small></p>
              <p><span className="pr-1">{release_date.slice(0, 4)}</span>year <span className="pl-2 pr-1">{runtime}</span>min</p>
              <p className="card-text">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

MovieDetails.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  tagline: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
  runtime: PropTypes.number,
  setShowMovieDetails: PropTypes.func
}

export default MovieDetails;
