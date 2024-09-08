import css from "../MovieCastCard/MovieCastCard.module.css"

export default function MovieCastCard({cast}) {
  const imgOfActor = "https://image.tmdb.org/t/p/w500";
return (
    <ul className={css.list}>
      {cast.map(({ id, original_name, profile_path, character }) => {
        return (
          <li className={css.item}  key={id} >
            <img  className={css.image} src={imgOfActor + profile_path} alt={original_name} width="100" height="150" />
            <h3 className={css.name}>{original_name}</h3>
            <p className={css.character}>Character: {character}</p>
          </li>
        );  
      })}
    </ul>
  );
}
