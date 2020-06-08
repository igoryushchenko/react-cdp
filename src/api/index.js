const baseUrl = 'https://reactjs-cdp.herokuapp.com/movies';

// searchBy:  title, genres
// sortBy: release_date, vote_average
// sortOrder: 'desc' or 'asc'

// https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average&sortOrder=desc&search=war&searchBy=title

const getMovies = ({searchString = '', sortBy = 'vote_average', searchBy = 'title'}) => {
  const url = `${baseUrl}?sortBy=${sortBy}&sortOrder=desc&search=${searchString}&searchBy=${searchBy}`;
  return fetch(url).then(data => data);
}

export {
  getMovies
}