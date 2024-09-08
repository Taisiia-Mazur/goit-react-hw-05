import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";

import fetchData from "../../FetchData";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import MovieCard from "../../components/MovieCard/MovieCard";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const goBack = useRef(location?.state ?? "/");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchData(
          `https://api.themoviedb.org/3/movie/${movieId}`
        );
        setMovieDetails(res.data);
      } catch (error) {

        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <GoBackBtn path={goBack.current}>Go back</GoBackBtn>
      {error && <p>Ooop...something went wrong...please try again.</p>}
      {loading && <p>Loading...</p>}
      {movieDetails && <MovieCard data={movieDetails} />}
      <p>Additional information</p>
      <ul className={css.list}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}