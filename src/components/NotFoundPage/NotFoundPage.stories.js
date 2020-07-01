import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storiesOf } from '@storybook/react';
import NotFoundPage from './NotFoundPage';

storiesOf('NotFoundPage', module)
  .add('404 page', () => <NotFoundPage />);
