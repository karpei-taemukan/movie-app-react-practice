import Details from "../components/Details";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import style from "../Movie.module.css";

function Detail(){

const {id} = useParams();

const [info, setInfo] = useState("");
const [genres, setGenres] = useState([]);

const getInfo = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json);
    setInfo(json.data.movie);
    setGenres(json.data.movie.genres);
}
useEffect(()=>{
    getInfo();
},[]);

return (
    <div className={style.detail}>
    <h1>Details!</h1>
    <h1>{info.rating}/10.0</h1>
    <h2>{info.language}</h2>
    <button><Link to={"/"}>HOME</Link></button>
    {genres.map((item, index) => (<Details key={index} genres={item} />))}
        
        </div>)
}

export default Detail;