import React from "react";
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub
} from "@fortawesome/free-brands-svg-icons";

const ProjectDetails = ({ project }) => {
  console.log(project);
  return (
    <Fade big>
    <div className="card card-bg m-2" style={{ width: "18rem" }}>
      <a href={project.live_site} target="_blank">
        <img src={project.image} className="card-img-top p-1" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{project.name}</h5>
          <p class="card-text">{project.detail}</p>
        </div>
      </a>
      <div className="mb-1">
        <div className="mx-auto">
        <a href={project.client_site} className="m-2" >
            <small><FontAwesomeIcon icon={faGithub} size="2x"/></small>
        </a>
        <a href={project.server_site}>
            <small><FontAwesomeIcon icon={faLink} size="2x"/></small>    
        </a>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default ProjectDetails;
