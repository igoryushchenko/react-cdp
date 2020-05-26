import React, {useState} from 'react';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import * as movieMock from './data/searchRes.json';
import * as movieMockEmpty from './data/searchResEmpty.json';
import MovieDetails from './components/MovieDetails/MovieDetails';


const App = () => {

  const [searchResults, setSearchResults] = useState("");
  const [showMovieDetails, setShowMovieDetails] = useState("");
  const [currentMovie, setCurrentMovie] = useState("");

  console.log(searchResults);

  const search = (searchString) => {
    if (searchString === '') {
      setSearchResults(movieMockEmpty);
    } else {
      setSearchResults(movieMock);
    }
  }

  const handleMovieSelect = (id) => {
    setCurrentMovie(searchResults.data.find(m => m.id === id));
    setShowMovieDetails('true');
  }

  return (
    <div className='container'>
      {showMovieDetails ?
          <MovieDetails {...currentMovie} setShowMovieDetails = {setShowMovieDetails}/>
        :
        <>
          <Search search={search}/>
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
                  <input type="radio" id="byRating" name="sortBy" className="custom-control-input"/>
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
