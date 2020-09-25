import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import { useState } from 'react';

const MainImage = () => (
  <Carousel interval={null} style={{ width: 600, height: 400 }}>
    <Carousel.Item>
      <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt="placeholder" width="auto" height="400" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt="placeholder" width="auto" height="400" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt="placeholder" width="auto" height="400" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt="placeholder" width="auto" height="400" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" alt="placeholder" width="auto" height="400" />
    </Carousel.Item>
  </Carousel>
);

export default MainImage;
