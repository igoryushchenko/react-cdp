import React from 'react';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Switch,
  Route
} from "react-router-dom";
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = ({ Router, location, context }) => {

  const searchResults = useSelector(state => state.searchResults);
  const currentMovie = useSelector(state => state.selectedMovie);

  return (
    <Router location={location} context={context}>
      <div className='container'>
        <Switch>
          <Route exact path="/">
              <Search/>
              <div className="row">
                <div className="col-sm pb-5">
                  <span>{searchResults.total} movie found</span>
                  <div className="float-right">
                    <span className="pr-2">Sort by:</span>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="byReleaseDate" name="sortBy" className="custom-control-input"/>
                      <label className="custom-control-label" htmlFor="byReleaseDate">RELEASE DATE</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="byRating" name="sortBy" className="custom-control-input" defaultChecked={true}/>
                      <label className="custom-control-label" htmlFor="byRating">RATING</label>
                    </div>
                  </div>
                </div>
              </div>
              <SearchResults movieData={searchResults}/>
          </Route>
          <Route path="/film/:id">
            <MovieDetails {...currentMovie}/>
            <SearchResults movieData={searchResults}/>
          </Route>
          <Route path="/search/:searchQuery">
              <Search/>
              <div className="row">
                <div className="col-sm pb-5">
                  <span>{searchResults.total} movie found</span>
                  <div className="float-right">
                    <span className="pr-2">Sort by:</span>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="byReleaseDate" name="sortBy" className="custom-control-input"/>
                      <label className="custom-control-label" htmlFor="byReleaseDate">RELEASE DATE</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="byRating" name="sortBy" className="custom-control-input" defaultChecked={true}/>
                      <label className="custom-control-label" htmlFor="byRating">RATING</label>
                    </div>
                  </div>
                </div>
              </div>
              <SearchResults movieData={searchResults}/>
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
};
App.defaultProps = {
  location: null,
  context: null,
};

export default App;
