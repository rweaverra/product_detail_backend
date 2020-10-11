import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const Search = ({ setId }) => {
  const [searchInput, setSearchInput] = useState(1);

  const handleSearchChange = (e) => {
    if (e.target.value === 3) {
      setSearchInput(2);
    }
    if (e.target.value === 10 || e.target.value === 11) {
      setSearchInput(9);
    }
    if (e.target.value === 12) {
      setSearchInput(13);
    }
    setSearchInput(Number(e.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`submitted ${searchInput}`);
    setId(searchInput);
  };

  return (
    <Container>
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
          onClick={(event) => handleSubmit(event)}
        />
      </Form.Group>
      <Form.Label className="search-form-label">Search by Product Numbers</Form.Label>
    </Container>
  );
};

Search.propTypes = {
  setId: PropTypes.func.isRequired,
};

export default Search;
