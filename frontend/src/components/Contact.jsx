import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import './components.css'

function Contact() {
  return (
    <div className='contact-section'>
        <div className="title">
            <h2>Let's Work Together</h2>
        </div>
        <div className="description">
            <h5>Get In Touch</h5>
            <p>I'm always interested in hearing about new opportunities and exciting projects. Let's discuss how we can bring your ideas to life!</p>
        </div>
        <div className="channels">
            <div className="contact">
                <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
                <span>Email</span>
                <p>isaac.rinen@gmail.com</p>
            </div>
            <div className="contact">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <span>Phone</span>
                <p>+254 759411167</p>
            </div>
            <div className="contact">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <span>Location</span>
                <p>Nairobi, Kenya</p>
            </div>            
        </div>
        <div className="form">
            <h5>Send A Message</h5>
            <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            <form>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </form>
            <button>Send Message</button>
        </div>
    </div>
  )
}

export default Contact