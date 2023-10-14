import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card/Card';

const Projects = ({ projects, github }) => {
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div id='projects' className='projects-container'>
      <div className='p-header'>
        <h1 className='dotted dotted-2'>Projects</h1>
        <a href={github.link}>
          <button>
            <FaGithub id='github-icon' />
            {github.username}
          </button>
        </a>
      </div>
      <div className='p-slider'>
        <Slider {...settings}>
          {projects.map((project) => (
            <Card
              name={project.name}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
