import './Card.css';

const Card = ({ name, description, tech, link }) => {
  return (
    <div className='card-container'>
      <a href={link} target='_blank' rel='noreferrer'>
        <h2>{name}</h2>
      </a>
      <p>{description}</p>
      <p>{tech}</p>
    </div>
  );
};

export default Card;
