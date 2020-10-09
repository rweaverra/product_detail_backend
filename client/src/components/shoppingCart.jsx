/* eslint-disable no-console */
import React from 'react';
// import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

// will have to display default style and price
const Cart = ({
  cart, currentStyle, product,
}) => {
  console.log('CART: cart! ', cart);
  // [ {id: 348, user_session: 8888, product_id: 1, active: 1}, ...]

  // console.log('CART: current style ', currentStyle);
  // console.log('CART: product ', product);

  // search products and get details - getInfo
  //   find poduct id, name, default_price
  // console.log(getInfo)
  // cart.map((item) => {
  //   console.log('CART: item product id', item.product_id);
  //   const itemId = item.product_id;
  //   // const itemInfo = getInfo(itemId, () => {});
  //   console.log('CART: item info', itemInfo);
  // });
  // const getCartInfo = () => {
  //   for (var i = 0; i < cart.length; i += 1) {
  //     const currentItem = cart[i];
  //     console.log(currentItem);
  //   }
  // };

  return (
    <div>
      <Table>
        <thead className="cart-table-header">
          <tr>
            <th>Product Name</th>
            <th>Product Style</th>
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
  getInfo: PropTypes.func.isRequired,
};

export default Cart;
