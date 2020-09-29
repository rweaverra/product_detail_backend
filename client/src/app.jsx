import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import TitleImage from './components/titleImage';
import ProductInfo from './components/productInfo';
import ProductDetails from './components/productDetails';
import { getAllStyles, getInfo } from './lib/routes';

const App = () => {
  const [styles, setStyles] = useState({});
  const [productId, setId] = useState(1);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getAllStyles((error, response) => {
      // console.log('data within get all styles', response.data);
      if (error) {
        return 'Could not get styles';
      }
      return setStyles(response);
    });
    // listProducts((error, response) => {
    //   if (error) {
    //     return 'Could not get products';
    //   }
    //   return setProducts(response);
    // });
    getInfo((error, response) => {
      if (error) {
        return 'Could not get products';
      }
      // console.log('id in app: ', response.id);
      setId(response.id);
      return setProduct(response);
    });
  }, []);

  return (
    <Container>
      <TitleImage />
      <ProductInfo styles={styles} product={product} />
      <ProductDetails product={product} productId={productId} />
      <br />
    </Container>
  );
};

export default App;
