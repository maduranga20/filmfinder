import React from 'react'
import { useState, useEffect } from 'react';


import { Database } from './ApiAccess';


const fruitData = [
  {
      name: "Apples",
      details: [
          {
              fruitId: '1',
              gradingDetails: [{ grade: 'A' }]
          },
          {
              fruitId: '2',
              gradingDetails: [{ grade: 'B' }]
          }
      ]
  },
  {
      name: "Oranges",
      details: [
          {
              fruitId: '3',
              gradingDetails: [{ grade: 'B' }]
          },
          {
              fruitId: '4',
              gradingDetails: [{ grade: 'D' }]
          }
      ]
  },
];

// console.log(fruitData[0]);

// var filteredObj = fruitData.filter(function (item) {
//   return item.name==="Oranges";
// });

// console.log(filteredObj);


function Movilist() {
  const [ list, setList ] = useState([]);
  const [keyValue, setKeyValue]= useState();

  // {photos.map((photo) => (
  //   <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
  // ))}

  // const API_KEY='97803665fe253e44e5d657dd15ecad20';
  // const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=Avengers&page=1&include_adult=false`

  // console.log(props.list);

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

  // console.log(list);
  //  const arrangeValues =list.map((track) => ({
  //     id: track.id,
  //     name: track.title,

  //   }));

  // const {select}=list.page;
  // const arrangeValues =list.results.map((track) => ({
  //       id: track.id,
  //       name: track.title,
  //     }));


  //     console.log(arrangeValues)
  // const postList = list.results.map(function (post) {
  //   return (
  //     <div key={post.id}>
  //       <p> title: {post.original_title}</p>
  //     </div>
  //   )
  // })
  // let listdata=[list.results];


  // const my_arr = [
  //   {id: 1, arr: [{subId: 1, value: 1}]},
  //   {id: 2, arr: [{subId: 2, value: 2}]},
  //   {id: 3, arr: [{subId: 3, value: 1}]},
  // ]
  // console.log(keyValue);
  const getList = list.results;
console.log(list);

var filteredObj = getList?.filter(function (item) {
    return item.id===keyValue;
  });


  console.log(filteredObj);
  

  let arrangeList = getList?.map((track) => {
   

    
    
    return (
      <div key ={track.id}>
       
       <button onClick={()=>{
        setKeyValue(track.id)
       }} > <p>{ track.title}+</p> </button>
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
