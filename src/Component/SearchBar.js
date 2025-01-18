
import React, { useState } from "react";

const apiKey = process.env.REACT_APP_APIKEY

// let search ='define';


 export function SearchValue({search}){

  console.log(search);
  let value="Avatar";

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${value}&page=3&include_adult=false`;


return (url)

}


export default function SearchMovie( ) {
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
console.log(apiKey);

  return (
    
    <div  >


      <form onSubmit={handleSubmit}>
      
        <input
          value={value}
          onInput={handleChange}
          required
        />
       
        <button type="submit">Search</button>

        <SearchValue  search={result}/>
      </form>
     
      
    </div>
    
  );

  }

 
 