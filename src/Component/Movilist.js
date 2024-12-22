// import { useState, useEffect } from 'react';
import React from 'react'
import ApiAccess from './ApiAccess'



function FilmList(props){
 console.log(props.getList);
 
  return (
    <h6>setupList</h6>
  )
     
}

 function Movilist() {

   // {photos.map((photo) => (
  //   <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
  // ))}

  // const API_KEY='97803665fe253e44e5d657dd15ecad20';
  // const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=Avengers&page=1&include_adult=false`
 
// console.log(props.list);

const check=<ApiAccess/>
  
  return (
   
    <>
     <div>Movilist</div>
     <FilmList getList={check}/>
    </>
    
  )
}



export default Movilist;
