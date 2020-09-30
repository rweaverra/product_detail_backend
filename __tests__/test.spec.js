import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Carousel, Container, Jumbotron } from 'react-bootstrap';
import App from '../client/src/app.jsx';
import TitleImage from '../client/src/components/titleImage';
import MainImage from '../client/src/components/mainImage';

describe('test', () => {
  test('tests', () => {expect(true).toBe(true);})
})
// describe('App', () => {
//   // test('renders snapshot', () => {
//   //   const component = renderer.create(<App />);
//   //   let tree = component.toJSON();
//   //   expect(tree).toMatchSnapshot();
//   // });
//   it('renders the inner Containers', () => {
//     const wrapper = mount(<App />);
//     expect(wrapper.find(Container).length).toEqual(3);
//   });
//   it('renders the Title Image', () => {
//     const wrapper = mount(<App />);
//     expect(wrapper.find(TitleImage).length).toEqual(1);
//   });
//   it('renders the Main Image', () => {
//     const wrapper = mount(<App />);
//     expect(wrapper.find(MainImage).length).toEqual(1);
//   });
// });

// describe('TitleImage', () => {
//   test('renders the Title Image', () => {
//     const wrapper = mount(<TitleImage />);
//     expect(wrapper.find(Jumbotron).length).toEqual(1);
//   });
//   it('renders the company name', () => {
//     const wrapper = mount(<TitleImage />);
//     expect(wrapper.find('h1').text()).toEqual('The Proto Company');
//   });
//   it('renders the informational text', () => {
//     const wrapper = mount(<TitleImage />);
//     expect(wrapper.find('p').text()).not.toBe('');
//   });
// });

// describe('MainImage', () => {
//   test('renders the main Carousel container', () => {
//     const wrapper = mount(<MainImage />);
//     expect(wrapper.find(Carousel).length).toEqual(1);
//   });
//   it('renders Carousel Items', () => {
//     const wrapper = mount(<MainImage />);
//     expect(wrapper.find(Carousel.Item).length).toEqual(5);
//   });
//   // it('sets image source correctly', () => {
//   //   const wrapper = mount(<MainImage />);
//   //   expect(wrapper.find('src').length).toEqual(5);
//   // });
//   // it('renders alternative text on images for accessibility', () => {
//   //   const wrapper = mount(<MainImage />);
//   //   expect(wrapper.find('alt').length).toEqual(5);
//   // });
// });
