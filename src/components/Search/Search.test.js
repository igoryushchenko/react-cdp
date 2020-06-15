import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search/Search';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

describe('MovieDetails component', () => {

  it('should be render correctly', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({

    });
    const component = shallow(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

});

