import PropTypes from "prop-types";

function Movie({key, coverImg, title, summary, genres}){

return(
<div key={key}><h1>{title}</h1>
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