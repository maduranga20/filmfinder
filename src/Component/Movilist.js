import React from 'react'
// import { useState } from 'react';
// import { Database } from './ApiAccess';
// import { SearchValue } from './SearchBar';
import { URLDATA } from './SearchBar';




function FetchData() {
  // const [ list, setList ] = useState([]);
  
  console.log(URLDATA);
  
  

  // const check = Database();
  

  // useEffect(() => {
  //   fetch(check)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setList(data);
  //     });
  // }, [ check ]);
 
  // console.log(list)
  
  return (
    <>
      <div>Movilist</div>
    
  </>

  )
}

// imagelink
// https://image.tmdb.org/t/p/original//ftTSxC3ivxiS5iPABgXIANmQVH7.jpg
//filmfinder link looking
// api/getMovieInfo/:movieId


export default FetchData;
