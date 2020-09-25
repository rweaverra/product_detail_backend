import App from '../client/src/app.jsx';
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Container, Jumbotron } from 'react-bootstrap';

const wrapper = mount(<App />);

describe('App', () => {
  test('simple react component test', () => {
    expect(wrapper.find('h1').text()).toEqual('The Proto Company');
  })
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the inner Containers', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Container).length).toEqual(2);
  });
  it('renders the Jumbotron', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Jumbotron).length).toEqual(1);
  });
})
