import React, { useEffect } from "react";
import "./AboutMe.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';


const AboutMe = () => {
  useEffect(() => {
    document.title = "About Me";
  }, []);
  
  return (
      <main className="mt-3 container">   
        <div className="row">
        <Fade bottom cascade>
          <div className="col-md-6 p-2">
            <div className="card shadow text-white card-bg p-3">
              <h1 className=""> Muhammad Omar Faruk</h1>
              <p>
                  <p style={{color: 'blue', width: '253px', padding:'2px', borderRadius: '2px soft'}} className="card" >
                    Newbie Software Engineer || MERN  
                  </p>   
              </p>
              <h3> Education: </h3>
              <hr />
              <h5> Bsc in Computer Science and Engineering </h5>
              <p>
                <small>
                  <i>East Delta University, Chattogram (Present)</i>
                </small>
              </p>
              <h5> Hsc in Science </h5>
              <p>
                <small>
                  <i>Chittagong Port College, Chattogram (Passed)</i>
                </small>
              </p>
              <h5> Ssc in Science </h5>
              <p>
                <small>
                  <i>Chittagong Collegiate School, Chattogram (Passed)</i>
                </small>
              </p>
              <div className="card card-bg shadow p-3 text-white">
              <h3>Skills:</h3>
              <hr />
              <li>
                <b>Expertise:</b>
                <p>
                  <small>
                    HTML5, Css3, JavaScript, Es6, React.js, Node.js, Express.js,
                    React-redux, React-router, Bootstrap, React-Boostrap,
                    Material-ui, React-reveal, MongoDB
                  </small>
                </p>
              </li>
              <li>
                <b>Familiar:</b>
                <p>
                  <small>
                    Sass, Tailwind-Css, Semantic-ui, Next.js, JSON,
                    React-Native, Overleaf, C
                  </small>
                </p>
              </li>
              <li>
                <b>Tools:</b>
                <p>
                  <small>
                    GitHub, Firebase, Heroku, Visual Studio, Netlify
                  </small>
                </p>
              </li>
              <a href="https://drive.google.com/file/d/1pZTv3kYRh8OzjVU1S2bzbK-_0gnn-SBX/view?usp=sharing" target="_blank">
           <button className="btn btn-outline-primary"><FontAwesomeIcon icon={faFileDownload} /> Download Resume</button> </a> 
            </div>
            </div>
          </div>
          <div className="col-md-6 p-2">   
            <div className="card mt-1 mb-4 card-bg shadow p-3 text-white">
              <h2> Skills shows in progress bar: </h2>
              <hr />
              <div className="p-1">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    HTML5
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    CSS3
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "93%" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Boostrap
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    JavaScript
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    React.js
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "65%" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Node.js
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Express.js
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "67%" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    MongoDB
                  </div>
                </div>
              </div>
                  <hr/>
                  <Link to="/" > 
                  <button className="btn btn-outline-primary"> Back to home </button>
                  </Link>
            </div>

          </div>
          </Fade>
        </div>
      </main>
  );
};

export default AboutMe;
