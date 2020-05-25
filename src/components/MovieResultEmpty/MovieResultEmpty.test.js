import React from 'react';
import { shallow } from 'enzyme';
import MovieResultEmpty from './MovieResultEmpty';

describe('MovieResultEmpty component', () => {
  it('should be render correctly', () => {
    const component = shallow(<MovieResultEmpty />);
    expect(component).toMatchSnapshot();

    expect(component.text()).toEqual('No films found');
  });
});
