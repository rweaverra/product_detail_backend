import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import App from '../client/src/app.jsx';
import TitleImage from '../client/src/components/titleImage';
import ProductDetails from '../client/src/components/productDetails.jsx';
import MainImage from '../client/src/components/mainImage';

describe('App', () => {
  test('renders snapshot', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  const wrapper = mount(<App />);
  it('renders the inner Containers', () => {
    expect(wrapper.find(Container).length).toEqual(1);
  });
  it('renders the Title Image', () => {
    expect(wrapper.find(TitleImage).length).toEqual(1);
  });
  it('renders the Product Info module', () => {
    expect(wrapper.find(ProductInfo).length).toEqual(1);
  });
  it('renders the Product Details module', () => {
    expect(wrapper.find(ProductDetails).length).toEqual(1);
  });
});

describe('Title Image', () => {
  test('renders the Title Image', () => {
    const wrapper = shallow(<TitleImage />);
    expect(wrapper.find(Jumbotron).length).toEqual(1);
  });
  it('renders the company name', () => {
    const wrapper = shallow(<TitleImage />);
    expect(wrapper.find('h1').text()).toEqual('The Proto Company');
  });
  it('renders the informational text', () => {
    const wrapper = shallow(<TitleImage />);
    expect(wrapper.find('p').text()).not.toBe('');
  });
  it('renders a button to view all products', () => {
    const wrapper = shallow(<TitleImage />);
    expect(wrapper.find('Button').text()).toEqual('View All Products');
  })
});

describe('Product Details', () => {
  const wrapper = shallow(<ProductDetails />)
  test('renders the Product Details', () => {
    expect(wrapper.find(Container).length).toEqual(1)
  })
})

describe('Main Image', () => {
  const wrapper = mount(<MainImage />);
  
  test('renders the main Carousel container', () => {
    expect(wrapper.find(Carousel).length).toEqual(1);
  });
  // photoArr
  // isZoomed state
  // setIsZoomed
  // useState(false)
  // handleImgLoad -> setIsZoomed
  // handleZoomChange -> setIsZoomed
  // Carousel
  // mapping fn
  // Carousel.Item
  // Controlled Zoom
  // img
  // src
  // alt
  // onLoad
});

// describe('', () => {
//   test('renders', () => {

//   })
// })