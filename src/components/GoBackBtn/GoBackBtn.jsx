import { Link } from "react-router-dom";
import { TbArrowBigLeftLine } from "react-icons/tb";

export default function GoBack({ path, children }) {
  return (
    <Link to={path}>
      <TbArrowBigLeftLine size="14"/>
      {children}
    </Link>
  );
}