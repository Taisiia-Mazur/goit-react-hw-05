import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";
import fetchData from "../../FetchData";
import movieCard from "../MovieCard/MovieCard";
import css from "../MovieList/MovieList.module.css"


export default function MovieList({ listFilms }) {
    const location = useLocation();
return (
     <ul className={css.list}>
      {listFilms.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );



 
};
