import React from 'react';
import mypic from '../images/mypic.png';
import BackToTopButton from '../components/BackToTopButton';
import mern from '../images/Mern.png';
import cpp from '../images/c++.png';
import laravel from '../images/laravel.png';
import python from '../images/python.png';
import php from '../images/php.png';
import django from '../images/django.jpg';
import figma from '../images/figma.png';
import wordpress from '../images/wordpress.png';
import sql from '../images/sql.png';
import dashbdesign from '../images/dashboard1.jpg';
import web from '../images/web.jpg';
import stdhrms from '../images/stdhrms.png';
import gym from '../images/gym.jpg';
import webQ from '../images/webQ.jpg';
import cvpdf from '../images/CVofpriyam.pdf';
import backgroundVideo from '../images/bgvid.mp4';
import Contact from '../components/Contact';

const skills = [
  {
    name: 'MERN Stack',
    description: 'Proficient in MongoDB, Express.js, React, and Node.js.',
    image: mern,
  },
  {
    name: 'C++',
    description: 'Experienced in C++ for competitive programming and system development.',
    image: cpp,
  },
  {
    name: 'Python',
    description: 'Skilled in Python for web development, data analysis, and scripting.',
    image: python,
  },
  {
    name: 'Laravel',
    description: 'Experienced in building web applications using Laravel framework.',
    image: laravel,
  },
  {
    name: 'PHP',
    description: 'Proficient in php for building website and handeling backend.',
    image: php,
  },
  {
    name: 'DJANGO',
    description: 'Experienced in building web applications using Django framework.',
    image: django,
  },
  {
    name: 'FIGMA',
    description: 'Experienced in building UI/UX designes using Figma.',
    image: figma,
  },
  {
    name: 'WordPress',
    description: 'Excel in building websites and blogs using wordpress framework.',
    image: wordpress,
  },
  {
    name: 'SQL',
    description: 'Proficient in using and storing data on relational database: SQL.',
    image: sql,
  },
];

function Wholescreen() {
  return (
    <div>
      {/* Background Video */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
        <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Header Section */}
      <header className="text-white py-5 position-relative">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-md-6 text-left" data-aos="fade-left" data-aos-duration="2500">
              <h1 className="display-4">PRIYAM MEDHI</h1>
              <p className="lead">Full Stack Web.Dev | Software Developer | Programmer</p>
            </div>
            <div className="col-md-6 text-md-right d-flex align-items-center justify-content-md-end" data-aos-offset="500" data-aos="fade-right" data-aos-duration="2000">
              <a href="https://www.instagram.com/_priyammedhi_/" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://github.com/priyammedhi" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="mailto:priyamkar23@gmail.com" className="text-white mr-3">
                <i className="fas fa-envelope fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/priyam-medhi-b49910201/" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="tel:+918472824009" className="text-white">
                <i className="fas fa-phone fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="py-5 text-white" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4 d-flex justify-content-center">
              <img src={mypic} alt="Your Name" className="rounded-circle mb-3 img-fluid" />
            </div>
            <div className="col-md-8">
              <p className="text-justify">
                I am a full-stack web developer with a passion for building engaging web experiences. With a comprehensive skillset that spans all aspects of web development and programming, I strive to deliver innovative and efficient solutions. My journey into the world of technology began with a strong academic foundation, earning a Bachelor of Technology degree in Computer Science Engineering from Lovely Professional University. Here, I honed my technical abilities and gained deep insights into the field, learning from experienced mentors and working on a variety of projects.
                During my university years, I took on various projects that allowed me to apply my classroom knowledge to real-world scenarios. I have experience working with a range of technologies including HTML, CSS, JavaScript, and various frameworks and libraries like React, Angular, and Vue.js. On the back end, I am proficient in Node.js, Express.js, and databases such as MongoDB and SQL. My ability to handle both front-end and back-end development allows me to create seamless and efficient applications.
                <br />In addition to web development, I have explored other areas of software development, including mobile app development and machine learning. This diverse experience has given me a well-rounded understanding of the tech landscape and the versatility to tackle a wide variety of challenges.
              </p>
              {/* Download Link */}
              <div className='d-flex justify-content-end'>
                <a href={cvpdf} download className="btn btn-outline-light">
                  <i className="fas fa-download"></i> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 text-white">
        <div className="container">
          <br />
          <h2 className="text-center">Skills</h2><br />
          <div className="row">
            {skills.map((skill, index) => (
              <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index} data-aos="zoom-in-up" data-aos-offset="200">
                <div className="card bg-secondary text-white">
                  <img src={skill.image} className="card-img-top" alt={skill.name} />
                  <div className="card-body">
                    <h5 className="card-title">{skill.name}</h5>
                    <p className="card-text">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="qualification" className="m-5 text-white">
        <div className="container">
          <br />
          <h2 className="text-center">Qualification</h2>
          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="timeline-content">
                <h5>2013 - 2015</h5>
                <h6>Master In Computer Science</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis voluptatem atque non adipisci enim veniam architecto neque quasi, sit explicabo necessitatibus repudiandae aut ea.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="timeline-content">
                <h5>2013 - 2015</h5>
                <h6>Master In Computer Science</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis voluptatem atque non adipisci enim veniam architecto neque quasi, sit explicabo necessitatibus repudiandae aut ea.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="timeline-content">
                <h5>2013 - 2015</h5>
                <h6>Master In Computer Science</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis voluptatem atque non adipisci enim veniam architecto neque quasi, sit explicabo necessitatibus repudiandae aut ea.</p>
              </div>
            </div>
          </div>
        </div>
      </section >


      {/* Projects Section */}
      <section section id="projects" className="bg-dark text-center m-4" style={{ borderRadius: '10px' }} >
        <div className="container">
          <br />
          <h2 className="text-center text-white">Projects</h2>
          <br />
          <div id="projectsCarousel" className="carousel slide p-5" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-4">
                      <img src={dashbdesign} className="card-img-top fixed-img" alt="Project 1" />
                      <div className="card-body">
                        <h5 className="card-title">Project 1</h5>
                        <p className="card-text">My First Project</p>
                        <a href="#" className="btn btn-primary">View Project</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4">
                      <img src={web} className="card-img-top fixed-img" alt="Project 2" />
                      <div className="card-body">
                        <h5 className="card-title">Project 2</h5>
                        <p className="card-text">My Second Project</p>
                        <a href="#" className="btn btn-primary">View Project</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4">
                      <img src={stdhrms} className="card-img-top fixed-img" alt="Project 3" />
                      <div className="card-body">
                        <h5 className="card-title">Project 3</h5>
                        <p className="card-text">My Third Project</p>
                        <a href="#" className="btn btn-primary">View Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-4">
                      <img src={gym} className="card-img-top fixed-img" alt="Project 4" />
                      <div className="card-body">
                        <h5 className="card-title">Project 4</h5>
                        <p className="card-text">My Fourth Project</p>
                        <a href="#" className="btn btn-primary">View Project</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4">
                      <img src={webQ} className="card-img-top fixed-img" alt="Project 5" />
                      <div className="card-body">
                        <h5 className="card-title">Project 5</h5>
                        <p className="card-text">My Fifth Project</p>
                        <a href="#" className="btn btn-primary">View Project</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4">
                      <img src={webQ} className="card-img-top fixed-img" alt="Project 6" />
                      <div className="card-body">
                        <h5 className="card-title">Project 6</h5>
                        <p className="card-text">My Sixth Project</p>
                        <a href="#" className="btn btn-primary">View Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#projectsCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#projectsCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section >
      <Contact/>



      <BackToTopButton />
    </div >
  );
}

export default Wholescreen;
