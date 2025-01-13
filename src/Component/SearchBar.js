import React from 'react'
// import { Database } from './ApiAccess';

import { useState } from 'react';


function SearchMovie() {
  const [ input, setInput ] = useState();
  const [ submit, setSubmit ] = useState(false);
  const [ searchValue, setSearchValue ] = useState();

  function searchingArtist(event) {
    setInput(event.target.value);
    // console.log(submit);

  }

  function submitInput(event) {
    setSubmit(event);

    if (submit.bubbles) {
      setSearchValue(input);
    }

  }


  //  onChange={searchingArtist}

  return (
    <div>
      <input type='text' onChange={searchingArtist}
        // onKeyDown={this.keyEnter}
        placeholder="Enter A Song, Album, or Artist" />
      <button onClick={submitInput}>Search</button>

    </div>

  )
}

export default SearchMovie