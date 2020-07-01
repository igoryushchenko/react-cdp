import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storiesOf } from '@storybook/react';
import Search from './Search';
import storyWrapper from '../../shared/storyWrapper';

storiesOf('Search', module)
  .addDecorator(storyWrapper)
  .add('Search empty', () => <Search />);
