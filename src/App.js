import React from 'react';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import { showMovieDetailsAction } from './store/actions';

const App = () => {

  const dispatch = useDispatch();

  const searchResults = useSelector(state => state.searchResults);
  const currentMovie = useSelector(state => state.selectedMovie);
  const showMovieDetails = useSelector(state => state.showMovieDetails);

  const handleMovieSelect = (id) => {
    dispatch(showMovieDetailsAction(id));
  }

  return (
    <div className='container'>
      {showMovieDetails ?
          <MovieDetails {...currentMovie}/>
        :
        <>
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
        </>
      }
      <SearchResults movieData={searchResults} handleMovieSelect={handleMovieSelect}/>
    </div>
  );
}

export default App;
