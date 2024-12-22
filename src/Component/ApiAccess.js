import { useState, useEffect } from 'react';
// import Movilist from './Movilist';



const ApiAccess = () => {
  const [photos, setList] = useState([]);

  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setList(data);
      });
  }, []);

  
  // console.log(photos);
  // <Movilist list={photos}/>
  return (
    <div>
        <p>ApiAcess</p>
    
    </div>
  );
};
export default ApiAccess;