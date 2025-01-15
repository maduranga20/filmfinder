

export  function Database() {

 
  

  const API_KEY='97803665fe253e44e5d657dd15ecad20';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=Avengers&page=3&include_adult=false`;
//  const url = `https://jsonplaceholder.typicode.com/posts`;
  return (
    url
  );
}