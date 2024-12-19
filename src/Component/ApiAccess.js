import React from 'react'
// import { useState,useEffect } from 'react'
// const clientID = process.env.REAACT_FILMFINDER_ACCESSTOKEN

 function ApiAccess() {

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzgwMzY2NWZlMjUzZTQ0ZTVkNjU3ZGQxNWVjYWQyMCIsIm5iZiI6MTcxODQ2MjEyNi44NTMsInN1YiI6IjY2NmRhNmFlNDY1YmVkZDNlOWE4ODNmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0h0vuueY0p2ukdITc6D9s9HASyDoFZGHA6-x9OBxetQ'
  //   }
  // };

  const API_KEY='97803665fe253e44e5d657dd15ecad20';
  const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=Avengers&page=1&include_adult=false`
 
  
  fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));


  return (
    <div>ApiAccess</div>
  )
}

export default ApiAccess