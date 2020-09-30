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
  // const [rating, getRating] = useState(0);
  // const [count, getCount] = useState(0);

  // const getTheAverageRating = (starData) => {
  //   console.log('App: star data ', starData);
  //   let reviewCount = 0;
  //   let reviewTotal = 0;
  //   const ratingArr = Object.entries(starData);
  //   for (let i = 0; i < ratingArr.length; i += 1) {
  //     const current = ratingArr[i];
  //     const stars = Number(current[0]);
  //     const counter = current[1];
  //     reviewCount += counter;
  //     reviewTotal += stars * counter;
  //   }
  //   console.log('App: logging total and count', reviewTotal, reviewCount);
  //   return reviewTotal / reviewCount;
  // };
  // const getTheReviewCount = (starData) => {
  //   let reviewCount = 0;
  //   const ratingArr = Object.entries(starData);
  //   for (let i = 0; i < ratingArr.length; i += 1) {
  //     const current = ratingArr[i];
  //     const counter = current[1];
  //     reviewCount += counter;
  //   }
  //   return reviewCount;
  // };

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
    // getRating((error, response) => {
    //   if (error) {
    //     return 'Could not get ratings';
    //   }
    //   console.log('App: response from getRating', response);
    //   const average = getTheAverageRating(response);
    //   return getRating(average);
    // });
    // getCount((error, response) => {
    //   if (error) {
    //     return 'Could not get review count';
    //   }
    //   console.log('App: response from getCount', response);
    //   const numberOReviews = getTheReviewCount(response);
    //   return getCount(numberOReviews);
    // });
  }, []);

  // console.log('App: rating before passing to product info: ', rating);
  // console.log('App: count before passing to product info: ', count);
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
      {/* <ProductInfo styles={styles} product={product} rating={rating} count={count} /> */}
      <ProductDetails product={product} productId={productId} />
      <br />
    </Container>
  );
};

export default App;
