import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search/Search';

describe('MovieDetails component', () => {

  it('should be render correctly', () => {
    const component = shallow(<Search />);

    expect(component).toMatchSnapshot();
  });

});

