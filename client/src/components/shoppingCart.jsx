/* eslint-disable no-console */
import React from 'react';
// import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

// will have to display default style and price
const Cart = ({ cart, currentStyle, product }) => {
  console.log('CART: cart! ', cart);
  // console.log('CART: current style ', currentStyle);
  // console.log('CART: product ', product);
  return (
    <div>
      <Table>
        <thead className="cart-table-header">
          <tr>
            <th>Product Name</th>
            <th>Product Style</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="cart-table-body">
          <tr>
            <td>{product.name}</td>
            <td>{currentStyle.name}</td>
            <td>S</td>
            <td>1</td>
            <td>
              $
              {
                currentStyle.sale_price > 0
                  ? currentStyle.sale_price
                  : currentStyle.original_price
              }
            </td>
          </tr>
          <tr className="totals">
            <td />
            <td />
            <td />
            <td>1 Total</td>
            <td>
              $
              {
                currentStyle.sale_price > 0
                  ? currentStyle.sale_price
                  : currentStyle.original_price
              }
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.any).isRequired,
  currentStyle: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    default: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.object),
    skus: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Cart;
