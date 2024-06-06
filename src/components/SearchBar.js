import React, { useState } from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ onSearch, onInputChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm.trim());
    }
  };
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    onInputChange(inputValue); // Pass the input value to the onInputChange function
  };
  return (
    <TextField
      label="Search City"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      style={{ marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
