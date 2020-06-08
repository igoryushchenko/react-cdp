import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {searchMovies} from '../../store/actions';
import {getMovies} from '../../api';

const Search = () => {

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchString, setSearchString] = useState(searchQuery);

  React.useEffect(() => {
    getMovies({searchQuery})
      .then(response => response.json())
      .then(data => {
        dispatch(searchMovies(data))
      });
  }, [searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchQuery(searchString);
  };

  return (
    <>
      <h3 className="pt-5">FIND YOUR MOVIE</h3>
      <form className="pb-5">
        <div className="form-row">
          <div className="col-md-10">
            <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
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
