import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MainImage = ({ styles }) => {
  const photoArr = styles.results && styles.results[0].photos;
  return (
    <Carousel interval={null} style={{ width: 600, height: 500 }}>
      {!!photoArr && photoArr.map((photo) => (
        <Carousel.Item key={photo.url}>
          <img
            src={photo.url}
            alt="current style"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainImage;
