

// const test= SearchValue();
// let defineresult = (test in window) ?  false : test;

export  function Database() {
// console.log(SearchValue);



// console.log(typeof(test))
// console.log((test in window))



let value="Avatar";




  const API_KEY='97803665fe253e44e5d657dd15ecad20';

  

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=3&include_adult=false`;
//  const url = `https://jsonplaceholder.typicode.com/posts`;
  return (
    url
  );
}



