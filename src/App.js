import "./App.css";
import content from "./content";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar name={content.name} />
      <div className="a-body">
        <Home name={content.name} intro={content.intro} />
        <AboutMe
          aboutMePara1={content.aboutMePara1}
          aboutMePara2={content.aboutMePara2}
          workplaces={content.workplaces}
          technologies={content.technologies}
        />
      </div>
    </div>
  );
}

export default App;
