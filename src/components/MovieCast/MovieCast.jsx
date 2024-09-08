import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../FetchData";
import MovieCastCard from "../MovieCastCard/MovieCastCard";


export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCredit() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchData(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`
        );
        setCast(res.data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getCredit();
  }, [movieId]);

  return (
    <>
      {error && <p>Ooop...something went wrong...please try again.</p>}
      {!loading ? cast && <MovieCastCard cast={cast} /> : <p>Loading...</p>}
    </>
  );
}
