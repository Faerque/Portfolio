import React from "react";
import "./Header.css";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="blurred-wrapper">
      <header class="main-header">
        <nav class="navbar navbar-expand-lg m-2 navbar-style navbar-light">
          <div class="container-fluid">
            <a href="index.html" class="logo">
              OMAR FARUK<span>.</span>
            </a>
            <button
              class="navbar-toggler light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link
                    to="/"
                    style={{ color: "white" }}
                    class="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/aboutMe"
                    style={{ color: "white" }}
                    class="nav-link"
                    href=""
                  >
                    About Me
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/blog"
                    style={{ color: "white" }}
                    class="nav-link"
                    href=""
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section
        style={{ height: "700px" }}
        className="row m-2 align-items-center"
      >
        <div class="col-md-5 offset-md-1">
          <div className="mt-5">
            <Typist cursor={{ show: false }}>
              <h1 style={{ color: "#ffff", fontSize: "60px" }}>
                Hi,
                <br /> I am Omar Faruk
                <br />
                Your Indeed MERN web Developer...
              </h1>
            </Typist>

            <div style={{ transitionDelay: "26s" }} className="">
              {" "}
              <Typist cursor={{ show: false }}>
                <a
                  href="https://drive.google.com/file/d/1-s35WsLpijJzYjljRPYwwVOSWW0Ij3AT/view?usp=sharing"
                  target="_blank"
                >
                  <Fade bottom>
                    {" "}
                    <button className="btn btn-outline-primary">
                      <FontAwesomeIcon icon={faFileDownload} /> Download Resume
                    </button>
                  </Fade>{" "}
                </a>
              </Typist>
            </div>
          </div>
        </div>
        <div className="offset-md-1 ">
          <Typist cursor={{ show: false }}>
            <Typist.Delay ms={4400} />
            <div>
              <h3 style={{ color: "white" }}>Find me here:</h3>
            </div>
            <div className="mt-2">
              <Flash>
                <a href="https://github.com/Faerque" target="_blank">
                  {" "}
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="3x"
                    className="mx-1"
                  />{" "}
                </a>
                <a href="https://www.linkedin.com/in/faeruqe/" target="_blank">
                  {" "}
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="3x"
                    className="mx-2"
                  />{" "}
                </a>
                <a href="https://twitter.com/Omafaer" target="_blank">
                  {" "}
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="3x"
                    className="mx-2"
                  />{" "}
                </a>
                <a href="https://www.facebook.com/FaerUqe" target="_blank">
                  {" "}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="3x"
                    className="mx-2"
                  />{" "}
                </a>
              </Flash>
            </div>
          </Typist>
        </div>
      </section>
    </div>
  );
};

export default Header;
