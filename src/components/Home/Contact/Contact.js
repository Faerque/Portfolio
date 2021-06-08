import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Fade from 'react-reveal/Fade';

function ContactForm() {
  const [state, handleSubmit] = useForm("mpzkqlpe");
  if (state.succeeded) {
    return <p>Thanks for Contact with me 😀</p>;
  }
  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name:</label>
      <input id="name" type="name" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email">Email Address:</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="name">Your Message:</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        class="btn btn-outline-success"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

const Contact = () => {
  return (
    <main>
      <div className="container contact-container ">
        <div className="row">
          <div className="text-white">
            <h3>
              <span style={{ color: "#0D82FC" }}>Contact</span> with me:
            </h3>
            <hr />
          </div>
          <Fade big>
          <div className="col-md-6 text-white section mt-3 mb-4">
            <div className="card card-bg p-3">
              <ContactForm />
            </div>
          </div>
          <div className="col-md-6 text-white mt-3 section mb-4">
            <div className="card justify-content-center card-bg p-3 shadow">
              <h5>Name: Md Omar Faruk</h5>
              <h6>Address: Halishahar, Chattogram, Bangladesh.</h6>
              <hr />
              <h6> Reach Me through Social Media: </h6>
              <br />
              <a href="https://github.com/Faerque">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </p>
              </a>
              <a href="https://www.linkedin.com/in/faeruqe/">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                </p>
              </a>
              <a href="https://twitter.com/Faeruqee">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </p>
              </a>
              <a href="https://www.facebook.com/FaerUqe">
                <p>
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </p>
              </a>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </main>
  );
};

export default Contact;
