import React, { useCallback, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ControlledZoom from 'react-medium-image-zoom';
import PropTypes from 'prop-types';

const MainImage = ({ styles }) => {
  const photoArr = styles.results && styles.results[0].photos;
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
      style={{ width: 700, height: 500 }}
      indicators={false}
      wrap={false}
    >
      {!!photoArr && photoArr.map((photo) => (
        <Carousel.Item key={photo.url} id="mainImage">
          <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange} closeText="Unzoom Image" openText="Zoom Image" zoomZindex="1" zoomMargin={20}>
            <img
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

MainImage.defaultProps = {
  styles: PropTypes.objectOf(PropTypes.string, PropTypes.number),
};
MainImage.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string, PropTypes.number),
};

export default MainImage;
