import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

const Header = () => {
  const { isDark, setIsDark } = useContext(Context);

  return (
    <header className={`header_container ${isDark ? "dark" : ""}`}>
      <div className="header_heading">
        <Link to="/">
          <img src="/logo.png" alt="logo" title="Go to Home" />
        </Link>
        <h2>All Countries</h2>
      </div>
      <div className="mode_elm">
        <i
          className={`fa-regular ${isDark ? "fa-sun" : "fa-moon"}`}
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
