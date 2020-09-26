import React, { useCallback, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ControlledZoom from 'react-medium-image-zoom';

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
      style={{ width: 600, height: 500 }}
      indicators={false}
      wrap={false}
    >
      {!!photoArr && photoArr.map((photo) => (
        <Carousel.Item key={photo.url} id="mainImage">
          <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange} closeText="Unzoom Image" openText="Zoom Image" zoomZindex="1">
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

export default MainImage;
