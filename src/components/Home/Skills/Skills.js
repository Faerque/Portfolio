import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import Fade from 'react-reveal/Fade';

const Skills = () => {
  return (
    <div className="container container-fluid">
      <div className="">
        <div className="text-white mt-5 ">
          <h3>
            I am <span style={{ color: "#0DFCDC" }}> Experts </span>on:
          </h3>
          <hr />
        </div>
        <Fade bottom cascade>
        <div className="container">
        <div className="row my-4">
        <div
          style={{ padding: "" }}
          className="col-2 text-center text-white mb-3"
        >
          <FontAwesomeIcon icon={faHtml5} size="3x" />
          <p className="m-2"> HTML5 </p>
        </div>
        <div
          style={{ padding: "" }}
          className="col-2  text-center text-white mb-3"
        >
          <FontAwesomeIcon icon={faCss3} size="3x" />
          <p className="m-2"> CSS3 </p>
        </div>
        <div
          style={{ padding: "" }}
          className="col-2 text-center  text-white mb-3"
        >
          <FontAwesomeIcon icon={faJsSquare} size="3x" />
          <p className="m-2"> <small>JS</small> </p>
        </div>
        <div
          style={{ padding: "" }}
          className="col-2 text-center text-white mb-3"
        >
          <FontAwesomeIcon icon={faReact} size="3x" />
          <p className="m-2">React.js </p>
        </div>
        <div
          style={{ padding: "" }}
          className="col-2 text-center text-white mb-3"
        >
          <FontAwesomeIcon icon={faNode} size="3x" />
          <p className="m-2"> Node.js </p>
        </div>
        </div>
        </div>
        </Fade>       
      </div>
    </div>
  );
};

export default Skills;
