import style from "../Movie.module.css";

function Details({genres}){

return (
<div>
<ul>
<li>{genres}</li>
</ul>
</div>)
};

export default Details;