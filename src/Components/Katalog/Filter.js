import React from "react";
import PropTypes from "prop-types";
import styled from "./Katalog.module.css";

const Filter = ({ onChange }) => {
  return (
    <>
      <span className={styled.input_name}> Find product by name:</span>

      <input placeholder="Search..." className={styled.katalog_input} type="text" name="filter" onChange={onChange} />
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired
};
export default Filter;
