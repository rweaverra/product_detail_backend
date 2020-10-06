// FIXES: Need to map over all styles for product image
//        and display first image of each style.
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { v4 as uuidv4 } from 'uuid';

const StyleThumbnails = ({ styles, setCurrentStyle, currentStyle }) => {
  const [isSelected, imgIsSelected] = useState(false);
  const photoArr = Object.entries(styles.results);
  // const handleStyleSelect = useCallback(() => {
  //   console.log('Style Thumbnails: name from image in handleStyleSelect', name);
  //   imgIsSelected(!isSelected); // current style will go here
  //   setCurrentStyle();
  // }, [isSelected]);
  const handleStyleSelect = () => {
    console.log('Style Thumbnails: current style in handle style select ', currentStyle);
    console.log('Style Thumbnails: style results in handle style select ', styles.results);
    setCurrentStyle(styles.results[2]);
    console.log('Style Thumbnails: current style in handle style select should be 2', currentStyle);
  };
  let className = 'thumbnails-img ';
  if (isSelected) {
    className += 'thumbnails-selected';
  }
  console.log('Style Thumbnails: current style', currentStyle);
  return (
    <div>
      {/* <Col sm={10} md={7}> */}
      <Container className="thumbnails-cage">
        {photoArr.map((photo, i) => {
          console.log('photo in map', photo);
          let photoUrl = '';
          if (photo[1].photos.thumbnail_url === null) {
            photoUrl = 'https://i.imgur.com/5vMEbrv.jpg';
          } else {
            photoUrl = photo[1].photos[0].thumbnail_url;
          }
          return (
            <Image
              value={i}
              key={uuidv4()}
              className={className}
              src={photoUrl}
              alt={photo.name}
              roundedCircle
              onClick={(value) => { handleStyleSelect(value); }}
            />
          );
        })}
      </Container>
      {/* </Col> */}
    </div>
  );
};

StyleThumbnails.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  currentStyle: PropTypes.shape({
    'default?': PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
    sale_price: PropTypes.string,
    skus: PropTypes.objectOf(PropTypes.number),
    style_id: PropTypes.number,
  }).isRequired,
  // productId: PropTypes.number.isRequired,
};

export default StyleThumbnails;
