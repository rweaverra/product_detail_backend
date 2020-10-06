// style thumbnails go here
// How will you display the style images?
// Will you use the thumbnail or the full image from the style?
// How will a user see they selected a style?
// What will the badge look like?
// How will you grab the image url and the style id?
// What will be held in state?
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { v4 as uuidv4 } from 'uuid';

const StyleThumbnails = ({ styles, setCurrentStyle, currentStyle }) => {
  const [isSelected, imgIsSelected] = useState(false);
  const photoArr = styles.results[0].photos;

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
          let photoUrl = '';
          if (photo.thumbnail_url === null) {
            photoUrl = 'https://i.imgur.com/5vMEbrv.jpg';
          } else {
            photoUrl = photo.thumbnail_url;
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
    style_id: PropTypes.string,
  }).isRequired,
  // productId: PropTypes.number.isRequired,
};

export default StyleThumbnails;
