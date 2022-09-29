import Details from "../components/Details";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";


function Detail(){

const {id} = useParams();

const [info, setInfo] = useState("");
const [torrent, setTorrent] = useState([]);

const getInfo = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json);
    setInfo(json.data.movie);
    setTorrent(json.data.movie.genres);
}
useEffect(()=>{
    getInfo();
},[]);

return (
    <div>
    <h1>Details!</h1>
    <h1>{info.rating}/10.0</h1>
    <h2>{info.language}</h2>
    {torrent.map((item, index) => (<Details key={index} torrent={item} />))}
        
        </div>)
}

export default Detail;