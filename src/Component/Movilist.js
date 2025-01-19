import React from 'react'
import { useState,useEffect } from 'react';
// import { Database } from './ApiAccess';
// import { SearchValue } from './SearchBar';
import { URLDATA } from './SearchBar';



const apiKey = process.env.REACT_APP_APIKEY

// var URLDATA = {url:"Avatar"


function FetchData() {
  const [ list, setList ] = useState([]);
  
  console.log(URLDATA);
  
  
let value=URLDATA;
  // const check = URLDATA.Url;

  // console.log(typeof(check));
  
  const check= `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${value}&page=3&include_adult=false`;


  useEffect(() => {
    fetch(check)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
      });
  }, [check]);
 
  console.log(list)
  
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
