import App from '../client/src/app.jsx';
import React from 'react';
import { mount } from 'enzyme';

const wrapper = mount(<App />);

test('simple react component test', () => {
  expect(wrapper.find('#test')).toHaveText('It is my app!');
})
