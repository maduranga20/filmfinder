
import { useState, useEffect } from 'react';
import './Style/pageStyle.css'



const apiKey = process.env.REACT_APP_APIKEY


export function SearchValue({ search }) {
  const [ list, setList ] = useState('');
  let value = search;
  const check = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${value}&page=3&include_adult=false`;


  useEffect(() => {
    fetch(check)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
      });
  }, [ check ]);

  // console.log(list.results)



  return (
    <>
      {(search) ? list.results.map(function (movie) {
        return (
          <div key={movie.id}>
            <p>Movie Name: {movie.title}</p>
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
    setResult(

      value
    );
  }

  function handleChange(e) {
    setValue(e.target.value);
    setResult("");

  }

  return (

    <div  >

      <div class="wrap">
        <div class="search">
          <form onSubmit={handleSubmit}>

            <input 
              value={value}
              onInput={handleChange}
              required
              class="searchTerm" />

            <button type="submit" class="searchButton">Search</button>

            <SearchValue search={result} />
          </form>
        </div>

      </div>


    </div>

  );

}

// imagelink
// https://image.tmdb.org/t/p/original//ftTSxC3ivxiS5iPABgXIANmQVH7.jpg
//filmfinder link looking
// api/getMovieInfo/:movieId

