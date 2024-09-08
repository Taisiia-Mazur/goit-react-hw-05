import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import fetchData from "../../FetchData";
import SearchForm from "../../components/SearchForm/SearchForm";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const movie = searchParams.get("movie");

  useEffect(() => {
    if (!movie) return;
    async function moviesRequest() {
      try {
        setMovies([]);
        setLoading(true);
        setError(null);
        const res = await fetchData(
          `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${movie}`
        );
        setMovies(res.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    moviesRequest();
  }, [movie]);


  return (
    <>
      <SearchForm />
      {error && <p>Ooop...something went wrong...please try again.</p>}
      {loading && <p>Loading...</p>}
      {movies && <MovieList listFilms={movies} />}
      {movie && !loading && movies.length === 0 && <p>Not found</p>}
    </>
  );
}
