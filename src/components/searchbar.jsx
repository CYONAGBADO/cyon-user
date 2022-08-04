import React, { useState } from "react";
import { Input, InputGroupText } from "reactstrap";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div >
      <InputGroupText>
        <Input
          type="text"
          name="searchbar"
          id="search"
          placeholder="Search for all users"
          onChange={inputHandler}
        />
        <FaSearch ml={3} />
      </InputGroupText>
    </div>
  );
};

export default Search;
