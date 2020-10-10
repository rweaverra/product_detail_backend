import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

const Cart = ({
  cart,
}) => {
  const productList = [
    {
      product_id: '1',
      name: 'Camo Onesie',
      style: 'Forest Green & Black',
      price: '140',
      size: 'M',
      quantity: 1,
    },
    {
      product_id: '2',
      name: 'Bright Future Sunglasses',
      style: 'Black Lenses & Black Frame',
      price: '69',
      size: 'OS',
      quantity: 2,
    },
    {
      product_id: '3',
      name: 'Morning Joggers',
      style: 'Black',
      price: '40',
      size: 'S',
      quantity: 1,
    },
    {
      product_id: '4',
      name: 'Slacker\'s Slacks',
      style: 'Olive Green',
      price: '65',
      size: 'M',
      quantity: 1,
    },
    {
      product_id: '5',
      name: 'Heir Force Ones',
      style: 'White & White',
      price: '99',
      size: '7',
      quantity: 1,
    },
    {
      product_id: '6',
      name: 'Pumped Up Kicks',
      style: 'Black',
      price: '89',
      size: '7',
      quantity: 2,
    },
    {
      product_id: '7',
      name: 'Blues Suede Shoes',
      style: 'White Sole',
      price: '120',
      size: '7',
      quantity: 1,
    },
    {
      product_id: '8',
      name: 'YEasy 350',
      style: 'Zebra Stripe',
      price: '900',
      size: '7',
      quantity: 1,
    },
    {
      product_id: '9',
      name: 'Summer Shoes',
      style: 'White',
      price: '59',
      size: '7',
      quantity: 1,
    },
    {
      product_id: '10',
      name: 'Infinity Stone',
      style: 'Power',
      price: '5000000',
      size: 'OS',
      quantity: 1,
    },
    {
      product_id: '11',
      name: 'Air Minis 250',
      style: 'New Style',
      price: '100',
      size: '7',
      quantity: 1,
    },
    {
      product_id: '13',
      name: 'Nicole Romper',
      style: 'Turquoise',
      price: '59',
      size: 'L',
      quantity: 1,
    },
    {
      product_id: '14',
      name: 'Oma Backpack',
      style: 'Blue',
      price: '233',
      size: 'OS',
      quantity: 2,
    },
    {
      product_id: '15',
      name: 'Dannie Sunglasses',
      style: 'Orchid',
      price: '382',
      size: 'OS',
      quantity: 1,
    },
    {
      product_id: '16',
      name: 'Georgianna Shorts',
      style: 'Cyan',
      price: '493',
      size: 'M',
      quantity: 1,
    },
    {
      product_id: '17',
      name: 'The Seamus Romper',
      style: 'Orchid',
      price: '889',
      size: 'M',
      quantity: 1,
    },
    {
      product_id: '18',
      name: 'Halle Heels',
      style: 'Tan',
      price: '133',
      size: '7',
      quantity: 1,
    },
    {
      product_id: '19',
      name: 'Blanca Tank Top',
      style: 'Indigo',
      price: '757',
      size: 'M',
      quantity: 2,
    },
    {
      product_id: '20',
      name: 'Lukas 1000 Hoodie',
      style: 'Orchid',
      price: '8',
      size: 'M',
      quantity: 5,
    },
  ];
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
          {
            cart.map((item) => {
              const itemInfo = productList[item.product_id];
              return (
                <>
                  <tr>
                    <td>{itemInfo.name}</td>
                    <td>{itemInfo.style}</td>
                    <td>{itemInfo.size}</td>
                    <td>{itemInfo.quantity}</td>
                    <td>
                      $
                      {itemInfo.price}
                    </td>
                  </tr>
                </>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );

//   console.log(cartArr);
//   return (
//     <div>
//       <Table>
//         <thead className="cart-table-header">
//           <tr>
//             <th>Product Name</th>
//             <th>Product Style</th>
//             <th>Quantity</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody className="cart-table-body">
//           <tr>
//             <td>{product.name}</td>
//             <td>{currentStyle.name}</td>
//             <td>S</td>
//             <td>1</td>
//             <td>
//               $
//               {
//                 currentStyle.sale_price > 0
//                   ? currentStyle.sale_price
//                   : currentStyle.original_price
//               }
//             </td>
//           </tr>
//           <tr className="totals">
//             <td />
//             <td />
//             <td />
//             <td>1 Total</td>
//             <td>
//               $
//               {
//                 currentStyle.sale_price > 0
//                   ? currentStyle.sale_price
//                   : currentStyle.original_price
//               }
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
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
