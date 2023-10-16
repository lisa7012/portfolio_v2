import './App.css';
import data from './data';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar name={data.name} />
      <div className='app-body'>
        <Home name={data.name} intro={data.intro} />
        <AboutMe
          aboutMePara1={data.aboutMePara1}
          aboutMePara2={data.aboutMePara2}
          workplaces={data.workplaces}
          technologies={data.technologies}
        />
        <Projects projects={data.projects} github={data.socials[0]} />
        <Contact socials={data.socials} />
      </div>
      <Footer
        figma={data.projects[6].figma}
        github={data.projects[6].link}
        fullName={data.fullName}
      />
    </div>
  );
}

export default App;
