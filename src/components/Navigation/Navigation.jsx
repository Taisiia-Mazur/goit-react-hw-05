import { NavLink } from "react-router-dom";
import css from '../Navigation/Navigation.module.css'
import clsx from "clsx"


const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
  return (
<div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/movies" className={getNavLinkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
</div>
  );
}

