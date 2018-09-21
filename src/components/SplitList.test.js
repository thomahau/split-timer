import React from 'react';
import { shallow } from 'enzyme';
import SplitList from './SplitList';

describe('<SplitList />', () => {
  const splits = [];
  beforeAll(() => {
    for (let i = 0; i < 10; i++) {
      splits.push(i);
    }
  });

  it('Renders without crashing', () => {
    shallow(<SplitList splits={splits} />);
  });

  it('Renders the splits', () => {
    const wrapper = shallow(<SplitList splits={splits} />);
    const renderedSplits = wrapper.find('li');
    expect(renderedSplits.length).toEqual(splits.length);
  });
});
