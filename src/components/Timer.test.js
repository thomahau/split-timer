import React from 'react';
import { shallow, mount } from 'enzyme';
import Timer from './Timer';

describe('<Timer />', () => {
  it('Renders without crashing', () => {
    shallow(<Timer />);
  });

  it('Renders the button', () => {
    const wrapper = shallow(<Timer />);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('Starts the timer when button is clicked', () => {
    const wrapper = mount(<Timer />);
    expect(wrapper.state('running')).toEqual(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('running')).toEqual(true);
  });
});
