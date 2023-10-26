import './NavBar.css';
import { useState } from 'react';

const NavBar = ({ name }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <nav className='underline'>
      <a href='index.html'>
        <span className='brand'>{name}.</span>
      </a>
      <div
        className='menu'
        onClick={() => {
          setIsMenuClicked(!isMenuClicked);
        }}
      >
        <span id={isMenuClicked ? 'line-1' : ''}></span>
        <span id={isMenuClicked ? 'line-2' : ''}></span>
        <span id={isMenuClicked ? 'line-3' : ''}></span>
      </div>
      <ul className={isMenuClicked ? 'menu-clicked' : ''}>
        <li>
          <a href='#about-me'>About Me</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
