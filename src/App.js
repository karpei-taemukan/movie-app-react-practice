import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";

function App() {
  const body = document.querySelector("body");
  body.style.backgroundColor = "seagreen";

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
   const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
   const json = await res.json();
   console.log(json);
   setMovies(json.data.movies);
  };

  useEffect(()=>{
    getMovies();
    setLoading(false);

  },[]);



  return (
    <div>
     {loading ? <h1>Loading...</h1>:null}
     {movies.map((movie) => (<div key={movie.id}><h1>{movie.title_long}</h1>
     <p>{movie.summary}</p> <img src={movie.medium_cover_image}/>
     <ul>
  {movie.genres.map((item,index) => (<li key={index}>{item}</li>))}
     </ul>
     </div>))}
    </div>
  );
}

export default App;
