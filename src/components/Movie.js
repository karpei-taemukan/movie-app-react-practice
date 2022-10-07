import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import style from "../Movie.module.css";

function Movie({id,coverImg, title, summary, genres}){

return(
<div className={style.movie}>
<img src={coverImg} alt={title}/>
  <h1><Link to={`/movie/${id}`} state={{id, title}}>{title}</Link></h1>
     <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p> 
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