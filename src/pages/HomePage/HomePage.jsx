import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import fetchData from "../../FetchData";

import MovieList from "../../components/MovieList/MovieList";




export default function HomePage() {
  const [listFilms, setListFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function filmsRequest() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchData(
          "https://api.themoviedb.org/3/trending/movie/day"
        );
        setListFilms(res.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    filmsRequest();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {error && <p>Ooop...something went wrong...please try again.</p>}
      {loading && <p>Loading...</p>}
      {listFilms && <MovieList listFilms={listFilms} />}
    </>
  );
}