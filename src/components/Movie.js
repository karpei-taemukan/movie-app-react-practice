import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import style from "../Movie.css";

function Movie({id,coverImg, title, summary, genres}){

return(
<div className={style}><h1><Link to={`/movie/${id}`}>{title}</Link></h1>
     <p>{summary}</p> <img src={coverImg} alt={title}/>
     <ul>
  {genres.map((item,index) => (<li key={index}>{item}</li>))}
     </ul>
     </div>)
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }

export default Movie;