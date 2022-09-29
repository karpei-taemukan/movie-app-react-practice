import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
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
  
    return (<div>
    {loading ? <h1>Loading...</h1>:null}
     {movies.map((movie) => (
     <Movie 
     id={movie.id}
     key={movie.id} 
     coverImg={movie.medium_cover_image}
     title={movie.title}
     summary={movie.summary}
     genres={movie.genres}
     />
     
))}
    </div>)
}

export default Home;