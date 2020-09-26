import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ImageZoom from 'react-medium-image-zoom';
import Zoom from 'react-medium-image-zoom';
// import 'react-medium-image-zoom/dist/styles.css';

const MainImage = ({ styles }) => {
  const photoArr = styles.results && styles.results[0].photos;
  return (
    <Carousel interval={null} style={{ width: 600, height: 500 }}>
      {!!photoArr && photoArr.map((photo) => (
        <Carousel.Item key={photo.url} id="mainImage">
          <Zoom>
            <img
              src={photo.url}
              alt={photo.name}
            />
          </Zoom>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainImage;
