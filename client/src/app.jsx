/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import TitleImage from './components/titleImage';
import ProductInfo from './components/productInfo';
import ProductDetails from './components/productDetails';
import { getAllStyles, getInfo, getReviews } from './lib/routes';

const App = () => {
  const [styles, setStyles] = useState({});
  const [productId, setId] = useState(1);
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState({});

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
  }, []);

  if (Object.keys(reviews).length === 0
  || Object.keys(product).length === 0
  || Object.keys(styles).length === 0) {
    return (
      <div />
    );
  }
  console.log('reviews before passing to product info: ', reviews);
  return (
    <Container>
      <TitleImage />
      <ProductInfo styles={styles} product={product} reviews={reviews} />
      <ProductDetails product={product} productId={productId} />
    </Container>
  );
};

export default App;
