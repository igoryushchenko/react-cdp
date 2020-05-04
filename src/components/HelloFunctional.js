import React from 'react';
import PropTypes from 'prop-types';

const HelloFunctional = ({ value }) => {
  return <h1>{value}</h1>;
};

HelloFunctional.propTypes = {
  value: PropTypes.string.isRequired,
};

export default HelloFunctional;
