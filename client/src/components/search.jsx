import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const Search = ({ setId }) => {
  const [searchInput, setSearchInput] = useState(0);

  const handleSearchChange = (e) => {
    setSearchInput(Number(e.target.value));
  };
  const handleSubmit = () => {
    console.log(`submitted ${searchInput}`);
  };

  useEffect(() => {
    console.log('attempting to update set id');
    setId(searchInput);
  });

  return (
    <Container className="">
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          placeholder="Product Number"
          rows="1"
          value={searchInput}
          onChange={handleSearchChange}
          className="search-form"
        />
        <input
          className="nav-button-root nav-button-control"
          type="submit"
          value="Submit"
          onClick={(event) => handleSubmit(event.target.value)}
        />
      </Form.Group>
    </Container>
  );
};

Search.propTypes = {
  setId: PropTypes.func.isRequired,
  // productId: PropTypes.number.isRequired,
};

export default Search;
