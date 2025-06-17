import './components.css'


const About = () => {
  return (
    <div className='about-section'>
        <div className="title">
            <h2>About Me</h2>
        </div>
        <div className="about-flex">
            <div className="about">
                <p>
                    I'm a passionate developer with a growing expertise in the tech industry, driven by a love for coding and problem-solving. With a solid foundation in functions, arrays, objects, and DOM manipulation, I enjoy creating real-world solutions that are both efficient and user-friendly. I thrive on exploring the endless possibilities of HTML, CSS, and JavaScript, especially diving into Node.js to build dynamic applications. Whether it's designing a sleek interface or tackling a complex challenge, I approach every project with curiosity and dedication. Always eager to learn and innovate, I aim to create impactful technology that makes life easier and more connected.
                </p>
            </div>
            <div className="pic">
                <img src="public/IMG_8682.jpg" />
            </div>
        </div>
        
    </div>
  )
}

export default About