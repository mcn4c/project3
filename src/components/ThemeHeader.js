import React from 'react';
import Dropdown from './Dropdown';

const ThemeHeader = ({ handleChange }) => {
  return (
    <header>
      <Dropdown handleChange={handleChange} />
    </header>
  );
};

export default ThemeHeader;