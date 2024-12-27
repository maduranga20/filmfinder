import React from 'react'
import { useState, useEffect } from 'react';


import { Database } from './ApiAccess';


function Movilist() {
  const [ list, setList ] = useState([]);
  const [ keyValue, setKeyValue ] = useState();


  const check = Database();


  useEffect(() => {
    fetch(check)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
      });
  }, [ check ]);


  const getList = list.results;
  // console.log(list);

  var filteredObj = getList?.filter(function (item) {
    return  item.id  !== keyValue;
  });

  let arrangeList
  if(Boolean(filteredObj)){
    arrangeList =filteredObj;
    }
  console.log(arrangeList);
  

   arrangeList = getList?.map((track) => {
    return (
      <div key={track.id}>

        <button onClick={() => {
          setKeyValue(track.id)
        }} > <p>{track.title}+</p> </button>
      </div>

    )
  }

  )
  return (

    <>
      <div>Movilist</div>
      {arrangeList}


    </>

  )
}



export default Movilist;
