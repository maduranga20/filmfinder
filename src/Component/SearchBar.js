// Filename - App.js

import React, { useState } from "react";

function SearchMovie() {
  const [ value, setValue ] = useState("");
  const [ result, setResult ] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setResult(

      value
    );
  }

  function handleChange(e) {
    setValue(e.target.value);
    setResult("");
  }
  return (
    <div  >


      <form onSubmit={handleSubmit}>
      
        <input
          value={value}
          onInput={handleChange}
          required
        />
       
        <button type="submit">Search</button>
      </form>
     
    </div>
  );
}

export default SearchMovie;
