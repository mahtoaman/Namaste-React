import { useEffect, useState } from "react";
import { Link } from "react-router";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home </Link>
          </li>

          <li>
            <Link to={"/about"}> About</Link>
          </li>

          <li>
            <Link to={"/contact"}>Contact </Link>
          </li>

          <li>
            <Link to={"/cart"}>Cart </Link>
          </li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
