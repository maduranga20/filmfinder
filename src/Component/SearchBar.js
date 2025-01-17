// Filename - App.js

import React, { useState } from "react";

 export function SearchValue({search}){

  // console.log(typeof(search))

let check;

let res = (search in window) ?  false : check;
// console.log(res)



return (res);

}


export default function SearchMovie( ) {
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
    <SearchValue search={result}/>
    </div>
    
  );

  }


