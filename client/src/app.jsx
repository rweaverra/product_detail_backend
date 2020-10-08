import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { Col } from 'react-bootstrap';
import TitleImage from './components/titleImage';
import ProductInfo from './components/productInfo';
import ProductDetails from './components/productDetails';
import Navigation from './components/navigation';
import Search from './components/search';
import Cart from './components/shoppingCart';
import {
  listProducts, // addToCart,
  getAllStyles, getCart, getDefaultStyle, getInfo, getReviews,
} from './lib/routes';

const App = () => {
  const [styles, setStyles] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [productId, setId] = useState('1');
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState({});
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);

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
      return setReviews(response.ratings);
    });
    getDefaultStyle((error, response) => {
      if (error) {
        return 'Could not get default style';
      }
      return setCurrentStyle(response);
    });
    getCart((error, response) => {
      if (error) {
        return 'Could not get cart';
      }
      // console.log('APP: get cart response', response);
      return setCart(response);
    });
    listProducts((error, response) => {
      if (error) {
        return 'Could not get product list';
      }
      // console.log('APP: get product list response', response);
      return setProductList(response);
    });
  }, []);

  if (Object.keys(reviews).length === 0
  || Object.keys(product).length === 0
  || Object.keys(styles).length === 0
  || Object.keys(currentStyle).length === 0
  || reviews === undefined
  || product === undefined
  || styles === undefined
  || currentStyle === undefined) {
    return (
      <div className="loading loading-img">
        <h1 className="loading-h1">The Proto Company</h1>
        <h3 className="loading-h3">504: Oops! Please Refresh The Page</h3>
        <div />
      </div>
    );
  }

  return (
    <Container>
      <div className="nav-wrap">
        <Row>
          <Col xs={10}>
            <Navigation productId={productId} productList={productList} />
          </Col>
          <Col xs={2}>
            <Search setId={setId} productId={productId} />
          </Col>
        </Row>
        <TitleImage />
        <div className="cart-navbar">
          <Image className="nav-img-cart" src="https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-9.jpg" alt="cart" />
        </div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
      <h2 className="sale">AUTUMN BACK TO SCHOOL SALE ~ SAVE 15% OFF YOUR FIRST ORDER ~ USE PROMO CODE: &apos;PROTO15&apos;</h2>
      <br />
      <div className="product-info-root">
        <ProductInfo
          styles={styles}
          setCurrentStyle={setCurrentStyle}
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
