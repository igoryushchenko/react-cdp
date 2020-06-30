import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {searchMoviesStartAction} from '../../store/actions';
import {useHistory, useParams} from 'react-router-dom';

const Search = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  let { searchQuery } = useParams();

  useEffect(() => {
    dispatch(searchMoviesStartAction(searchQuery));
  }, [searchQuery]);

  const [searchString, setSearchString] = useState(searchQuery);

  const handleSearchInputChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    dispatch(searchMoviesStartAction(searchString));
    history.push(`/search/${searchString}`);
  };

  return (
    <>
      <h3 className="pt-5">FIND YOUR MOVIE</h3>
      <form className="pb-5">
        <div className="form-row">
          <div className="col-md-10">
            <label className="sr-only" htmlFor="movieQuery">Name</label>
            <input type="text"
                   className="form-control mb-2"
                   id="movieQuery"
                   value={searchString}
                   onChange={handleSearchInputChange}
            />
          </div>
          <div className="col-md-2">
            <button id="searchBtn" type="submit" className="btn btn-primary mb-2" onClick={handleSearchClick}>SEARCH</button>
          </div>
        </div>
        <div className="form-row">
          <p className="pr-2">SEARCH BY:</p>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="byTitle" name="searchBy" className="custom-control-input" defaultChecked={true}/>
            <label className="custom-control-label" htmlFor="byTitle">TITLE</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="byGenre" name="searchBy" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="byGenre">GENRE</label>
          </div>
        </div>
      </form>
    </>
  );
};

Search.propTypes = {
  search: PropTypes.func
};

export default Search;
