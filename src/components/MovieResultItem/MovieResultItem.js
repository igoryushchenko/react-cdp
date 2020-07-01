// @flow
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showMovieDetailsAction } from '../../store/actions';
import type { MovieProps } from '../../types/MovieProps';

const MovieResultItem = ({
  id, title, release_date, poster_path, genres,
}: MovieProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleMovieSelect = (movieId) => {
    dispatch(showMovieDetailsAction(movieId));
    history.push(`/film/${movieId}`);
  };

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

export default MovieResultItem;
