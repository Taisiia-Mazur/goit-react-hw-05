import css from "./MovieReviewsCard.module.css"
export default function MovieReviewsCard({ reviews }) {
   return (
    <>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3 className={css.author}>Author: {author}</h3>
              <p className={css.content}>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
