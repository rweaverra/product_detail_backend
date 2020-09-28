import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Features = ({ product }) => {
  const featureList = product && product.features;
  const featureSet = new Set(featureList);
  const featureArray = [...featureSet];

  return (
    <Card className="features-style">
      {/* <Card.Header>
        <p className="features-links">Features</p>
      </Card.Header> */}
      <Card.Body className="accordion-body">
        {
        !!featureArray && featureArray.map((trait) => (
          <Row key={500 + trait.feature}>
            <Col>
              <img
                src="https://icons-for-free.com/iconfiles/png/512/checkmark+circle+icon-1320195547843144574.png"
                className="features-check"
                alt="checkmark"
              />
              {
              trait.value === 'null' ? trait.feature : (trait.value).concat(' ', trait.feature)
              }
            </Col>
          </Row>
        ))
        }
      </Card.Body>
    </Card>
  );
};

Features.defaultProps = {
  product: PropTypes.objectOf(PropTypes.string),
};
Features.propTypes = {
  product: PropTypes.objectOf(PropTypes.string, PropTypes.number),
};
export default Features;
