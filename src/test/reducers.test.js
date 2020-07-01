import { rootReducer } from '../store/reducers';
import constants from '../shared/constants';

const state = {
  searchString: '',
  searchResults: {
    data: [
      {
        id: 412302,
        title: 'Gemini',
        tagline: '',
        vote_average: 10,
        vote_count: 3,
        release_date: '2018-03-30',
        poster_path: 'https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg',
        overview: 'A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss. As the assistant travels across Los Angeles to unravel the mystery, she must stay one step ahead of a determined policeman and confront her own understanding of friendship, truth and celebrity.',
        budget: 0,
        revenue: 0,
        genres: [
          'Mystery',
          'Thriller',
        ],
        runtime: 92,
      },
      {
        id: 141052,
        title: 'Justice League',
        tagline: '',
        vote_average: 6.4,
        vote_count: 3960,
        release_date: '2017-11-15',
        poster_path: 'https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg',
        overview: 'Fuelled by his restored faith in humanity and inspired by Superman\'s selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.',
        budget: 500000000,
        revenue: 655894816,
        genres: [
          'Action',
          'Adventure',
          'Fantasy',
          'Science Fiction',
        ],
        runtime: 120,
      },
      {
        id: 268896,
        title: 'Pacific Rim: Uprising',
        tagline: 'Rise Up',
        vote_average: 6,
        vote_count: 318,
        release_date: '2018-03-21',
        poster_path: 'https://image.tmdb.org/t/p/w500/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg',
        overview: 'It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.',
        budget: 150000000,
        revenue: 150613316,
        genres: [
          'Action',
          'Fantasy',
          'Science Fiction',
          'Adventure',
        ],
        runtime: 111,
      },
    ],
    total: 3,
    offset: 0,
    limit: 0,
  },
  selectedMovie: {},
  showMovieDetails: false,
};

describe('root reducer', () => {
  it('should return the initial state', () => {
    const defaultState = {
      searchString: '',
      searchResults: {
        data: [],
        total: 0,
        offset: 0,
        limit: 0,
      },
      selectedMovie: {},
      showMovieDetails: false,
    };

    expect(rootReducer(undefined, {})).toEqual(defaultState);
  });

  it('should return show movie details state', () => {
    const id = '268896';
    const action = {
      type: constants.SHOW_MOVIE_DETAILS,
      payload: {
        id,
      },
    };

    const result = rootReducer(state, action);

    expect(result).toHaveProperty('showMovieDetails', true);
    expect(result).toHaveProperty('selectedMovie');
  });

  it('should return hide movie details state', () => {
    const action = {
      type: constants.HIDE_MOVIE_DETAILS,
    };

    const result = rootReducer(state, action);

    expect(result).toHaveProperty('showMovieDetails', false);
  });

  it('should return search results state', () => {
    const action = {
      type: constants.SEARCH_MOVIES_SUCCESS,
      payload: {
        searchResults: state.searchResults,
      },
    };

    const result = rootReducer(state, action);

    expect(result).toHaveProperty('searchResults', state.searchResults);
  });
});
