import './Footer.css';

const Footer = ({ figma, github, fullName }) => {
  return (
    <footer>
      © 2023&nbsp;
      <a href={figma} target='_blank' rel='noreferrer'>
        Designed
      </a>
      &nbsp;&&nbsp;
      <a href={github} target='_blank' rel='noreferrer'>
        Developed
      </a>
      &nbsp;by {fullName}
    </footer>
  );
};

export default Footer;
