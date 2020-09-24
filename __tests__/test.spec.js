import App from '../client/src/app.jsx';
import React from 'react';
import { mount } from 'enzyme';
import { Container } from 'react-bootstrap';

const wrapper = mount(<App />);

test('simple react component test', () => {
  expect(wrapper.find('h2').text()).toEqual('It is my app!');
})
