import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css'


export default function NotFoundPage() {
      return (
    <div>
      <h1>404 Not Found!</h1>
      <p>
        Please use this link to go <Link to="/">back home</Link>
      </p>
    </div>
  );
};
