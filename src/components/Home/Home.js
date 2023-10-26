import './Home.css';
import { SlArrowDown } from 'react-icons/sl';
import HomeGirlSvg from '../../assets/illustrations/home_girl.svg';
import Resume from '../../assets/Resume_Lisa_Duong.pdf';

const Home = ({ name, intro }) => {
  return (
    <>
      <div className='home-container'>
        <div className='hc-intro'>
          <h1>
            Hello, my name <br />
            is <span className='dotted dotted-1'>{name}</span>.
          </h1>
          <p>{intro}</p>
          <a href={Resume} target='_blank' rel='noreferrer'>
            <button>My resume</button>
          </a>
        </div>
        <div className='hc-home-girl-img'>
          <img src={HomeGirlSvg} alt='home-girl svg' />
        </div>
      </div>
      <div className='arrow-down'>
        <a href='#about-me'>
          <SlArrowDown id='arrow' />
        </a>
      </div>
    </>
  );
};

export default Home;
