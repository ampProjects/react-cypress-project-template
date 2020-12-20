import React from 'react';
import { mount } from 'enzyme';

import App from './App';

it('renders learn react link', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.App-link').text()).toContain('Learn React');
});
