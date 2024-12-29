import React from 'react'
import { useState, useEffect } from 'react';


import { Database } from './ApiAccess';


function Movilist() {
  const [ list, setList ] = useState([]);
  const [ keyValue, setKeyValue ] = useState();
  // const [ change, setChangeList ] = useState();


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
  // let changeValue=getList;
  // setChangeList(getList);
  var arrangeList;


  // filteredObj = getList?.filter(function (item) {
  //   return item.id !==keyValue;


  // var selectId ;
  let selectId=[];

if(keyValue===undefined){
  // console.log("undefined");
  
}
else{
  // selectId = getList?.filter(function (item) {
  //   return item.id===keyValue;
  // });
  selectId.unshift(keyValue);

}
console.log(selectId);


    
      

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
