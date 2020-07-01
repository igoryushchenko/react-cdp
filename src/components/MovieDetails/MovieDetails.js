// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { hideMovieDetailsAction } from '../../store/actions';
import type { MovieProps } from '../../types/MovieProps';

const Rounded = styled.span`
  border-radius: 50%;
  border: 1px solid gray;
  padding: 6px;
  line-height: 1;
`;

const MovieDetails = ({
  title, poster_path, vote_average, tagline, release_date, overview, runtime,
}: MovieProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearchClick = () => {
    dispatch(hideMovieDetailsAction());
    history.push('/');
  };

  return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={poster_path} className="card-img" alt={`Poster picture for ${title} movie`} />
          </div>
          <div className="col-md-8">
            <div className="card-details card-body">
              <div className="card-details-main card-title">
                <span className="h4 pr-3">{title}</span>
                <Rounded>{vote_average}</Rounded>
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
  setShowMovieDetails: PropTypes.func,
};

export default MovieDetails;
