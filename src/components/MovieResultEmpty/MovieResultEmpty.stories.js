import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storiesOf } from '@storybook/react';
import MovieResultEmpty from './MovieResultEmpty';

storiesOf('MovieResultEmpty', module)
  .add('empty details', () => <MovieResultEmpty />);
