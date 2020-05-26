import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import MovieResultEmpty from '../components/MovieResultEmpty/MovieResultEmpty';
import MovieResultItem from "../components/MovieResultItem/MovieResultItem";

describe('App component', () => {
  it('Should return empty component on empty search string', () => {
    const wrapper = mount(<App />);
    const searchBtn = wrapper.find('#searchBtn');
    const searchInput = wrapper.find('#movieQuery');

    searchInput.instance().value = '';
    // searchBtn.simulate('click');
    searchBtn.prop('onChange')();
    expect(wrapper.find(MovieResultEmpty)).toHaveLength(1);

  });

  it('Should render movie components on non empty search string', () => {
    const wrapper = mount(<App />);
    const searchBtn = wrapper.find('#searchBtn');
    const searchInput = wrapper.find('#movieQuery');

    searchInput.instance().value = 'gwfsdf';
    searchBtn.simulate('click');
    expect(wrapper.find(MovieResultItem)).toHaveLength(1);

  });
});