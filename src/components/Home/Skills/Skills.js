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
    <div className="container">
      <div className="row">
        <div className="text-white mt-5 ">
          <h3>
            I am <span style={{ color: "#0DFCDC" }}> Experts </span>on:
          </h3>
          <hr />
        </div>
        <Fade bottom cascade>
        <div
          style={{ padding: "" }}
          className="col-2 text-center text-white mb-3"
        >
          <FontAwesomeIcon icon={faHtml5} size="5x" />
          <h4 className="m-1"> HTML5 </h4>
        </div>
        <div
          style={{ padding: "" }}
          className="col-2 mx-auto text-center text-white mb-3"
        >
          <FontAwesomeIcon icon={faCss3} size="5x" />
          <h4 className="m-1"> CSS3 </h4>
        </div>
        <div
          style={{ padding: "" }}
          className="col-2 mx-auto text-center text-white mb-3"
        >
          <FontAwesomeIcon icon={faJsSquare} size="5x" />
          <h4 className="m-1"> JavaScript </h4>
        </div>
        <div
          style={{ padding: "" }}
          className="col-2 mx-auto text-center text-white mb-3"
        >
          <FontAwesomeIcon icon={faReact} size="5x" />
          <h4 className="m-1"> React.js </h4>
        </div>
        <div
          style={{ padding: "" }}
          className="col-md-2 mx-auto text-center text-white mb-3"
        >
          <FontAwesomeIcon icon={faNode} size="5x" />
          <h4 className="m-1"> Node.js </h4>
        </div>
        </Fade>       
      </div>
    </div>
  );
};

export default Skills;
