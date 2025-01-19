
import React, { useState } from "react";


// let search ='define';

export var URLDATA




export function SearchValue({ search }) {
 
  // var defineresult = (search) ? search : false;
  // URLDATA = (search) ? search : 'Avatar';
  // URLDATA.url="Avatar";
  URLDATA=search;
  // let value="Avatar";

//   if (defineresult) {
//   }
//   else {
// }


  


  

}


export default function SearchMovie() {
  const [ value, setValue ] = useState();
  const [ result, setResult ] = useState('');
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


  // let result="define"

  // console.log(result);
  // var defineresult = (result) ?  result : 'false';
  // let defineresult="define";
  // console.log(apiKey);
  // let data="Avatar";

  return (

    <div  >


      <form onSubmit={handleSubmit}>

        <input
          value={value}
          onInput={handleChange}
          required
        />

        <button type="submit">Search</button>

        <SearchValue search={result} />
      </form>


    </div>

  );

}


