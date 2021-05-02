import React from "react";
import Fade from 'react-reveal/Fade';

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
      <div class="card-body ">
        <a href={project.client_site}>
          <button
            className="btn btn-outline-primary m-2"
            style={{ maxWidth: "90px" }}
          >
            GitHub Client
          </button>
        </a>
        <a href={project.server_site}>
          <button
            className="btn btn-outline-primary"
            style={{ maxWidth: "90px" }}
          >
            GitHub Server
          </button>
        </a>
      </div>
    </div>
    </Fade>
  );
};

export default ProjectDetails;
