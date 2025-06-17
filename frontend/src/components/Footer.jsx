import './components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <div className='general-footer'>
        <div className="footer">
            <div className="summary">
                <p className='one'>Isaac Rinaldo</p>
                <p>I am a Python enthusiast and backend developer passionate about building clean and efficient web applications.</p>
                <div className="footer-social-links">
                    <FontAwesomeIcon icon={faGithub} className='github-icon' size='1.5x'/>
                    <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon' size='1.5x' />
                    <FontAwesomeIcon icon={faEnvelope} className='email-icon' size='1.5x' />
                </div>
            </div>
            <div className="quick-links">
                <p className='one'>Quick Links</p>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </div>
            <div className="services">
                <p className='one'>Services</p>
                <p>Web Development</p>
                <p>FrontEnd Development</p>
                <p>BackEnd Development</p>
                <p>Consulting</p>
            </div>
        </div>
        <hr id='line'></hr>
        <p id='copy'>Copyright &copy; 2025. All rights reserved</p>
    </div>
  )
}

export default Footer