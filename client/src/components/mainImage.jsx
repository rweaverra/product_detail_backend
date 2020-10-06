import React, { useCallback, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ControlledZoom from 'react-medium-image-zoom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const MainImage = ({ styles }) => {
  const photoArr = styles.results[0].photos;
  const [isZoomed, setIsZoomed] = useState(false);
  const handleImgLoad = useCallback(() => {
    setIsZoomed(true);
  }, []);
  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <Carousel
      interval={null}
      style={{ width: '37vmax', height: '20vmax' }}
      indicators={false}
      wrap={false}
    >
      {!!photoArr && photoArr.map((photo) => (
        <Carousel.Item key={uuidv4()} id="mainImage">
          <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange} closeText="Unzoom Image" openText="Zoom Image" zoomZindex="1" zoomMargin={20}>
            <img
              className="main-img"
              src={photo.url}
              alt={photo.name}
              onLoad={handleImgLoad}
            />
          </ControlledZoom>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

MainImage.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default MainImage;
