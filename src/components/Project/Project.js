import React from "react";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import FaerEdu from "./Project_Image/FaerEdu.JPG";
import Shop24 from "./Project_Image/Shop-24.JPG";
import Urao_Riders from "./Project_Image/Urao_Riders.JPG";

const projectData = [
  {
    name: "FaerEdu",
    detail:
      "A online course website which made on using HTML5, Css3, React.js, React-Router, React-Hook-Form, Firebase Auth, Firebase Hosting, Node.js, Express.js and Monogodb Database. It has full user control and admin control functionality",
    image: FaerEdu,
    live_site: "https://faeredu.web.app/",
    client_site: "https://github.com/Faerque/FaerEdu-Client",
    server_site: "https://github.com/Faerque/FaerEdu-Server",
  },
  {
    name: "Shop24",
    detail:  
      "A online Shop website which made on using HTML5, Css3, React.js, React-Router, React-Hook-Form, Firebase Auth, Firebase Hosting, Node.js, Express.js and Monogodb Database. It has full admin control functionality and user can add any product to cart",
    image: Shop24,
    live_site: "https://shop-24-7.web.app/",
    client_site: "https://github.com/Faerque/Shop-24-Client",
    server_site: "https://github.com/Faerque/Shop-24-Server",
  },
  {
    name: "Urao Riders",
    detail:
      "A Ride Share website which made on using HTML5, Css3, React.js, React-Router, React-Hook-Form, Firebase Auth, Firebase Hosting, Node.js,  It has a user can any of ride and select destination by using google logging",
    image: Urao_Riders,
    live_site: "https://urao-riders.web.app/",
    client_site: "https://github.com/Faerque/Urao-Riders",
    server_site: "https://github.com/Faerque/Urao-Riders",
  },
];

const Project = () => {
  return (
    <section className="container mt-5 mb-5 text-white">
      <h3>
        My best <span style={{ color: "green" }}> Project </span>yet:
      </h3>
      <hr />
      <div className="d-flex justify-content-center container">
        <div className="w-75 row pt-4">
          {projectData.map((project) => (
            <ProjectDetails project={project}> </ProjectDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
