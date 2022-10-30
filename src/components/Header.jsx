import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="j-bg-dark-variant px-3 d-flex align-items-center">
      <Link to="/" className="h2 m-0 text-light ">
        Notes List
      </Link>
    </header>
  );
};

export default Header;
