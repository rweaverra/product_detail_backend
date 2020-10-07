import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const TitleImage = () => (
  <Jumbotron>
    <h1 className="jumbotron-h1">The Proto Company</h1>
    <p className="jumbotron-p">
      Add a touch of comfort to your everyday wardrobe with our casual wear,
      including soft sweaters and hoodies, joggers, cargo pants and relaxed
      shirts. Complete your look with our casual jackets and shoes.
    </p>
    <div className="products-root products-control">View All Products</div>
  </Jumbotron>
);

export default TitleImage;
