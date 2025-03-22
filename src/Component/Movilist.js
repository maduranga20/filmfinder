
import { useState, useEffect } from 'react';
import './Style/pageStyle.css';
import './Style/timer.css';
import Timer from './Timer';

const apiKey = process.env.REACT_APP_APIKEY




function SearchValue({ search }) {
  const [ list, setList ] = useState('');
  // const [ isLoading, setIsLoading ] = useState(true);


  let value = search;
  const check = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${value}&page=3&include_adult=false`;


  const timing=Timer();
  // console.log("from search"+Boolean(value));
  // console.log(timing);

  if(value){
    // console.log(timing);
    // return <h2>chk</h2>
  }

  useEffect(() => {
    
    const fetchlist = async () => {
      await fetch(check)
        .then((res) => {
          return res.json();
        })
        
        .then((data) => {
          setList(data);
          
        })
        .catch((e) => console.log(e));

    };
   
   
    // Timer();
  // const list= fetchlist();
  // fetchlist();

  
  // console.log(timing);

    
    const timer = setTimeout(() => {
      fetchlist()

    }, 5000);


    return () => clearTimeout(timer);

    

  }, [timing, check ]);
  
  // console.log(list.results);

  // console.log(loading);

  // let image='UNs12yJwQHJQiyTSK8OfQ3ib0m.jpg';
  // poster_path
  // if (search) {
  //   return <div >
  //     <p>...Loading</p>
  //   </div>;
  // }
  return (
    <>
      {(search) ? list.results.map(function (movie) {
        return (
          <div className='cardlist'>
            <div className="card">
              <div key={movie.id} className="frame">
                <div className="image-container">
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="img" />
                </div>

                <div className="content">
                  <h4><span>{movie.title}</span></h4>
                  <p><span>{movie.overview}</span></p>
                </div>
              </div>
            </div>
          </div>

        )
      }) : ''}

    </>

  )
}


export default function SearchMovie() {
  const [ value, setValue ] = useState('');
  const [ result, setResult ] = useState('');
  // const [ error, setError] = useState('');


  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();

    setResult(value);
  }


  function handleChange(e) {
    setValue(e.target.value);
    setResult("");
  }

  return (

    <div  >

      <div className="wrap">
        <div className='heading'>
          <h2 >Film Finder</h2>
        </div>

        <div className="search">
          <form onSubmit={handleSubmit}>

            <input
              value={value}
              onInput={handleChange}
              required
              className="searchTerm" />

            <button type="submit" className="searchButton">Search</button>
          </form>

        </div>
        <SearchValue search={result} />
      </div>


    </div>

  );

}

// imagelink
// https://image.tmdb.org/t/p/original//ftTSxC3ivxiS5iPABgXIANmQVH7.jpg
//filmfinder link looking
// api/getMovieInfo/:movieId

// const check = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${value}&page=3&include_adult=false`;


//   useEffect(() => {
//     fetch(check)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setList(data);
//       });
//   }, [ check ]);
