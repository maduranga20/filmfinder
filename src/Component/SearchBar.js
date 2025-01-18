
import React, { useState } from "react";

const apiKey = process.env.REACT_APP_APIKEY

// let search ='define';


 export function SearchValue({search}){



return (search)

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
console.log(process.env);

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

 
 