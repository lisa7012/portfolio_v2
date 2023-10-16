import './AboutMe.css';
import AboutMeSvg from '../../assets/illustrations/about_me.svg';

const AboutMe = ({ aboutMePara1, aboutMePara2, workplaces, technologies }) => {
  const formattedWorkplace = (workplace, link) => {
    return (
      <a href={link} target='_blank' rel='noreferrer'>
        {workplace}
      </a>
    );
  };

  return (
    <div id='about-me' className='about-me-container'>
      <div className='am-about-me-img'>
        <img src={AboutMeSvg} alt='about-me svg' />
      </div>
      <div className='am-content'>
        <h1 className='dotted dotted-2'>About Me</h1>
        <p>{aboutMePara1}</p>
        <p>
          {aboutMePara2.pieces[0]}
          {formattedWorkplace(workplaces[0].company, workplaces[0].link)}
          {aboutMePara2.pieces[1]}
          {formattedWorkplace(workplaces[1].company, workplaces[1].link)}
          {aboutMePara2.pieces[2]}
        </p>
        <h2>Some technologies I've worked with: </h2>
        <div>
          <ul>
            {technologies.slice(0, 4).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <ul>
            {technologies.slice(4, 8).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
