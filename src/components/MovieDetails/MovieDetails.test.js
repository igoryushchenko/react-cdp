import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from './MovieDetails';

describe('MovieDetails component', () => {

  let movieData;

  beforeAll(() => {
    movieData = {
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
        'Adventure'
      ],
      runtime: 111
    };
  });

  it('should be render correctly', () => {
    const component = shallow(<MovieDetails {...movieData}/>);

    expect(component).toMatchSnapshot();
    expect(component.contains(<span className="h4 pr-3">Pacific Rim: Uprising</span>)).toBe(true);
  });
});
