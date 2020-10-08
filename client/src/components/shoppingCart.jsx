import React from 'react';
// import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

const Cart = () => (
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
          <td>Monicle</td>
          <td>Gold</td>
          <td>S</td>
          <td>1</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Panda Onsie</td>
          <td>Black & White</td>
          <td>S</td>
          <td>5</td>
          <td>$320.00</td>
        </tr>
        <tr className="totals">
          <td />
          <td />
          <td />
          <td>6 Total</td>
          <td>$420.00</td>
        </tr>
      </tbody>
    </Table>
  </div>
);
export default Cart;
