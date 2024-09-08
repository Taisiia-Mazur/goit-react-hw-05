import css from "../MovieCard/MovieCard.module.css";

export default function MovieCard({ data }) {
  const { poster_path, title, release_date, overview, genres, vote_average } = data;

  const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <>
      <div className={css.wrapper}>
        <img
          src={
            poster_path
              ? posterPath
              : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png?20210219185637"
          }
          alt={title}
          width="200"
          height="300"
          className={css.image}
        ></img>
        <div>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>User score: {Math.floor(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
    </>
  );
}
