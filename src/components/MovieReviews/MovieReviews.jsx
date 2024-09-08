import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../FetchData";
import MovieReviewsCard from "../MovieReviewsCard/MovieReviewsCard";


export default function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchData(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`
        );
        setReviews(res.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {error && <p>Ooop...something went wrong...please try again.</p>}
      {!loading ? reviews && <MovieReviewsCard reviews={reviews} /> : <p>Loading...</p>}
    </>
  );
}
