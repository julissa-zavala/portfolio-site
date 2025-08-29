import { Link, useLocation } from "react-router-dom";
import "../css/index.css";

const HeaderNav = () => {
  const location = useLocation();
  const isInfoPage = location.pathname === "/info";

  return (
    <nav role="navigation" className="nav-container">
      <Link to={isInfoPage ? "/" : "/info"} className="nav-text-link-wrapper">
        <div className="nav-text">{isInfoPage ? "JULISSA ZAVALA" : "INFO"}</div>
        <div className="nav-text-line-through"></div>
      </Link>
    </nav>
  );
};

export default HeaderNav;
