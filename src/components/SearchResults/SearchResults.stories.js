import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storiesOf } from '@storybook/react';
import storyWrapper from '../../shared/storyWrapper';
import SearchResults from './SearchResults';

const searchResults = {
  total: 2,
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
      overview: "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
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
  ],
};

const searchResultsEmpty = {
  data: [],
};

storiesOf('SearchResults', module)
  .addDecorator(storyWrapper)
  .add('SearchResults empty', () => <SearchResults movieData={searchResultsEmpty} />)
  .add('SearchResults not empty', () => <SearchResults movieData={searchResults} />);
