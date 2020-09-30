// style thumbnails go here
// How will you display the style images?
// Will you use the thumbnail or the full image from the style?
// How will a user see they selected a style?
// What will the badge look like?
// How will you grab the image url and the style id?
// What will be held in state?
import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const StyleThumbnails = () => (
  <div className="thumbnails-cage">
    <Col sm={10} md={7}>
      {/* mapping fn returns the following */}
      <Image className="thumbnails-img" src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" roundedCircle />
      {/* end mapping fn */}
      <Image className="thumbnails-img" src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" roundedCircle />

      <Image className="thumbnails-img" src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" roundedCircle />

      <Image className="thumbnails-img" src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" roundedCircle />

      <Image className="thumbnails-img" src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" roundedCircle />

      <Image className="thumbnails-img" src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png" roundedCircle />
    </Col>

  </div>
);

export default StyleThumbnails;
