import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });

  it('Renders the header and the Timer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('Timer').length).toBe(1);
  });
});
