import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const productList = [
  {
    product_id: 2,
    name: 'Camo Onesie',
    style: 'Forest Green & Black',
    price: '140',
    size: 'M',
  },
  {
    product_id: 3,
    name: 'Bright Future Sunglasses',
    style: 'Black Lenses & Black Frame',
    price: '69',
    size: 'OS',
  },
  {
    product_id: 4,
    name: 'Morning Joggers',
    style: 'Black',
    price: '40',
    size: 'S',
  },
  {
    product_id: 5,
    name: 'Slacker\'s Slacks',
    style: 'Olive Green',
    price: '65',
    size: 'M',
  },
  {
    product_id: 6,
    name: 'Heir Force Ones',
    style: 'White & White',
    price: '99',
    size: '7',
  },
  {
    product_id: 7,
    name: 'Pumped Up Kicks',
    style: 'Black',
    price: '89',
    size: '7',
  },
  {
    product_id: 8,
    name: 'Blues Suede Shoes',
    style: 'White Sole',
    price: '120',
    size: '7',
  },
  {
    product_id: 9,
    name: 'YEasy 350',
    style: 'Zebra Stripe',
    price: '900',
    size: '7',
  },
  {
    product_id: 9,
    name: 'Summer Shoes',
    style: 'White',
    price: '59',
    size: '7',
  },
  {
    product_id: 10,
    name: 'Infinity Stone',
    style: 'Power',
    price: '5000000',
    size: 'OS',
  },
  {
    product_id: 11,
    name: 'Air Minis 250',
    style: 'New Style',
    price: '100',
    size: '7',
  },
  {
    product_id: 13,
    name: 'Nicole Romper',
    style: 'Turquoise',
    price: '59',
    size: 'L',
  },
  {
    product_id: 14,
    name: 'Oma Backpack',
    style: 'Blue',
    price: '233',
    size: 'OS',
  },
  {
    product_id: 15,
    name: 'Dannie Sunglasses',
    style: 'Orchid',
    price: '382',
    size: 'OS',
  },
  {
    product_id: 16,
    name: 'Georgianna Shorts',
    style: 'Cyan',
    price: '493',
    size: 'M',
  },
  {
    product_id: 17,
    name: 'The Seamus Romper',
    style: 'Orchid',
    price: '889',
    size: 'M',
  },
  {
    product_id: 18,
    name: 'Halle Heels',
    style: 'Tan',
    price: '133',
    size: '7',
  },
  {
    product_id: 19,
    name: 'Blanca Tank Top',
    style: 'Indigo',
    price: '757',
    size: 'M',
  },
  {
    product_id: 20,
    name: 'Lukas 1000 Hoodie',
    style: 'Orchid',
    price: '8',
    size: 'M',
  },
  {
    product_id: 21,
    name: 'Alphonso 1050 Shirt',
    style: 'Black',
    price: '900',
    size: 'M',
  },
  {
    product_id: 22,
    name: 'Wellington Skirt',
    style: 'Violet',
    price: '923',
    size: 'M',
  },
  {
    product_id: 23,
    name: 'Kane Hoodie',
    style: 'Lime',
    price: '788',
    size: 'S',
  },
  {
    product_id: 24,
    name: 'Amani Tank Top',
    style: 'Gold',
    price: '725',
    size: 'M',
  },
  {
    product_id: 25,
    name: 'Alfreda Jacket',
    style: 'Gold',
    price: '521',
    size: 'M',
  },
];

const Cart = ({ cart }) => (
  <div>
    <Table>
      <thead className="cart-table-header">
        <tr>
          <th>Product Name</th>
          <th>Product Style</th>
          <th>Size</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className="cart-table-body">
        {
          cart.map((item) => {
            let itemInfo = [];
            if (productList[item.product_id] !== undefined) {
              itemInfo = productList[(item.product_id) - 2] || productList[(item.product_id) - 1];
            } else {
              itemInfo = productList['1'];
            }
            return (
              <tr key={uuidv4()}>
                <td>{itemInfo.name}</td>
                <td>{itemInfo.style}</td>
                <td>{itemInfo.size}</td>
                <td>
                  $
                  {itemInfo.price}
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  </div>
);

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
