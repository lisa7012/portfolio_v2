import './Contact.css';
import ContactSocialsSvg from '../../assets/illustrations/contact_socials.svg';

const Contact = ({ socials }) => {
  return (
    <div id='contact' className='contact-me-container'>
      <div className='cm-contact-socials-img'>
        <img src={ContactSocialsSvg} alt='contact-socials svg' />
      </div>
      <div className='cm-content'>
        <h1 className='dotted dotted-1'>Contact</h1>
        <p>Always pleased to stay in touch!</p>
        <div className='cm-socials-btns'>
          <a href={socials[1].link}>
            <button>{socials[1].name}</button>
          </a>
          <a href={socials[2].link} target='_blank' rel='noreferrer'>
            <button>{socials[2].name}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
