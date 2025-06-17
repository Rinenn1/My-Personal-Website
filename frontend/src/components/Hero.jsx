import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import './components.css'


function Hero() {
  return (
    <div className='overall'>
        <div className="header">
            <h1>Hi, I'm Isaac Rinaldo</h1>
        </div>
        <div className="details">
            <p>I am a Python enthusiast and backend developer passionate about building clean and efficient web applications.</p>
        </div>
        <div className="buttons">
            <button className="button" id="btn1">
                View My Work
            </button>
            <button className="button" id="btn2">
                Download My Resume
            </button>
        </div>
        <div className="links">
            <FontAwesomeIcon icon={faGithub} className='github-icon' size='2x'/>
            <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon' size='2x' />
            <FontAwesomeIcon icon={faEnvelope} className='email-icon' size='2x' />
        </div>

        <div>
            <FontAwesomeIcon icon={faArrowDown} className="bounce-icon" />
        </div>
    </div>
  )
}

export default Hero