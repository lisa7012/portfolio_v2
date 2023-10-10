import "./Home.css";
import { SlArrowDown } from "react-icons/sl";
import content from "../../content/content";
import HomeGirl from "../../assets/illustrations/home_girl.svg";
import Resume from "../../assets/Resume_Lisa_Duong.pdf";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hc-intro">
          <h1>
            Hello, my name <br />
            is <span id="name">{content.name}</span>.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href={Resume} target="_blank" rel="noreferrer">
            <button>My resume</button>
          </a>
        </div>
        <div className="hc-home-girl">
          <img src={HomeGirl} alt="home-girl svg" />
        </div>
      </div>
      <div className="arrow-down">
        <SlArrowDown id="arrow" />
      </div>
    </>
  );
};

export default Home;
