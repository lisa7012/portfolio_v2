import "./NavBar.css";
import { HiOutlineBars3 } from "react-icons/hi2";

const NavBar = () => {
  return (
    <nav className="underline">
      <a href="#">
        <span className="brand">Lisa.</span>
      </a>
      <ul>
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
      <HiOutlineBars3 className="menu" />
    </nav>
  );
};

export default NavBar;
