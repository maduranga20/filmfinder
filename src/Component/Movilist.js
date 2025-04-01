
import { useState, useEffect, useMemo } from 'react';
import './Style/pageStyle.css';
import './Style/timer.css';
import Timer from './Timer';

const apiKey = process.env.REACT_APP_APIKEY




function SearchValue({ search }) {
  const [ list, setList ] = useState('');

  const [ isLFecth, setFecth ] = useState(false);


  let value = search;
  const check = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${value}&page=3&include_adult=false`;

  const spinTime = Timer();
 
  const  fetchlist = useMemo(() =>  async () => {
      await fetch(check) 
        .then((res) => {
         
          return res.json();
         
        })
  
        .then((data) => {
          setList(data);
          setFecth((data.results.length>0)?  false : true) ;
        })
      
        .catch((e) => console.log(e));
  
    },[check]
  );


  
  const setspinTime=(value)? spinTime : false;
  const spin = (setspinTime) ? <div className='spinner'>
    <span className="loader"> </span>
  </div> : "";

  const loadData = (isFetch) ? spin : "";
  console.log(loadData);

  const loadData=(isLFecth)?spin:"";

console.log(loadData);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchlist()

    }, 3000);


    return () => clearTimeout(timer);




  }, [ fetchlist ]);



  return (

    <>
   {loadData}
      {(search) ? list.results?.map(function (movie) {
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


  function handleSubmit(e) {
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
