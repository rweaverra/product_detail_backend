import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';

const Features = ({ product }) => {
  const featureList = product && product.features;
  const featureSet = new Set(featureList);
  const featureArray = [...featureSet];

  return (
    <Card className="features-style">
      <Card.Body className="accordion-body">
        {
        !!featureArray && featureArray.map((trait) => (
          <Row key={uuidv4()}>
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

Features.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Features;
