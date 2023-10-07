import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <nav className="underline">
      <a href="#">
        <span className="brand">Lisa.</span>
      </a>
      <div
        className="menu"
        onClick={() => {
          setIsMenuClicked(!isMenuClicked);
        }}
      >
        <span id={isMenuClicked ? "line-1" : ""}></span>
        <span id={isMenuClicked ? "line-2" : ""}></span>
        <span id={isMenuClicked ? "line-3" : ""}></span>
      </div>
      <ul className={isMenuClicked ? "menu-clicked" : ""}>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
