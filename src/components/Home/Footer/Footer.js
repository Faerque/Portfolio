import React from "react";

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <div className="text-white text-muted text-center mt-5 mb-4">
          <p>
            <small> &copy;{new Date().getFullYear()} Omar Faruk </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
