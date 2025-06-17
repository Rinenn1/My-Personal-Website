import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faSquareBinary, faCode } from '@fortawesome/free-solid-svg-icons';


const Skills = () => {
  return (
    <div>
        <div className="title">
            <h2>Skills & Technologies</h2>
        </div>
        <div className="skills">
          <div className="technology">
            <div className="lang">
              <FontAwesomeIcon icon={faCode} className='skill-icon' />
              <span>HTML/CSS</span>
            </div>
            <div className="progress-container">
              <div className="progress-fill" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="technology">
            <div className="lang">
              <FontAwesomeIcon icon={faJs} className='skill-icon' />
              <span>JavaScript</span>
            </div>
            <div className="progress-container">
              <div className="progress-fill" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="technology">
            <div className="lang">
              <FontAwesomeIcon icon={faReact} className='skill-icon' />
              <span>React</span>
            </div>
            <div className="progress-container">
              <div className="progress-fill" style={{ width: '70%' }}></div>
            </div>
          </div>

          <div className="technology">
            <div className="lang">
              <FontAwesomeIcon icon={faPython} className='skill-icon' />
              <span>Python</span>
            </div>
            <div className="progress-container">
              <div className="progress-fill" style={{ width: '50%' }}></div>
            </div>
          </div>

          <div className="technology">
            <div className="lang">
              <FontAwesomeIcon icon={faSquareBinary} className='skill-icon' />
              <span>Flask</span>
            </div>
            <div className="progress-container">
              <div className="progress-fill" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
        

    </div>
  )
}

export default Skills