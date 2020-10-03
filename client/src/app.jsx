/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import TitleImage from './components/titleImage';
import ProductInfo from './components/productInfo';
import ProductDetails from './components/productDetails';
// import Cart from './components/shoppingCart';
import {
  getAllStyles, getDefaultStyle, getInfo, getReviews,
} from './lib/routes';

const App = () => {
  const [styles, setStyles] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [productId, setId] = useState(1);
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState({});

  // styles.results: [{style_id, name, original_price, sale_price,
  // default, photos [{thumbnail_url, url}] }]
  // current style = styles.results[0].default NUM (style_id)
  // -> productInfo & Details, Thumbnails, Price, styleNames, size & quantityDropdown, shoppingCart
  // default price = product.default_price NUM
  // -> productInfo, stylePrice
  // style price = styles.results[0].original_price STR
  // -> productInfo, stylePrice, shoppingCart
  // style sale price = styles.results[0].sale_price STR
  // -> productInfo, stylePrice, shoppingCart
  // style photos = styles.results[0].photos ARR of OBJ
  // -> productInfo, mainImage, styleThumbnails
  // related styles

  useEffect(() => {
    getAllStyles((error, response) => {
      if (error) {
        return 'Could not get styles';
      }
      return setStyles(response);
    });
    getInfo((error, response) => {
      if (error) {
        return 'Could not get products';
      }
      setId(response.id);
      return setProduct(response);
    });
    getReviews((error, response) => {
      if (error) {
        return 'Could not get reviews';
      }
      console.log('App: get reviews response', response.ratings);
      return setReviews(response.ratings); // object
    });
    getDefaultStyle((error, response) => {
      if (error) {
        return 'Could not get default style';
      }
      return setCurrentStyle(response);
    });
  }, []);

  if (Object.keys(reviews).length === 0
  || Object.keys(product).length === 0
  || Object.keys(styles).length === 0) {
    return (
      <div className="loading loading-img">
        <h1 className="loading-h1">The Proto Company</h1>
        <h3 className="loading-h3">504: Oops! Please Refresh The Page</h3>
        <div />
      </div>
    );
  }
  console.log('App: reviews before passing to product info: ', reviews);
  console.log('App: current style passing to product info: ', currentStyle);
  return (
    <Container>
      <div>
        <Navbar bg="dark" variant="dark" className="nav-root">
          <Navbar.Brand className="nav-brand" href="#home">The Proto Co.</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-links" href="#products">Products</Nav.Link>
            <Nav.Link className="nav-links" href="#contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <img className="nav-img-cart" src="https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-9.jpg" alt="cart" />
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <div className="nav-button-root nav-button-control">Search</div>
          </Form>
        </Navbar>
        <TitleImage />
      </div>
      <h2 className="sale"><em>AUTUMN BACK TO SCHOOL SALE ~ SAVE 15% OFF YOUR FIRST ORDER ~ USE PROMO CODE: &apos;PROTO15&apos;</em></h2>
      <br />
      <div className="product-info-root">
        <ProductInfo
          styles={styles}
          setCurrentStyleHandler={setCurrentStyle}
          currentStyle={currentStyle}
          product={product}
          productId={productId}
          reviews={reviews}
        />
      </div>
      <div className="product-details-root">
        <ProductDetails
          product={product}
          productId={productId}
        />
      </div>
    </Container>
  );
};

export default App;
