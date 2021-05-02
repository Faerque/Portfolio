import React from "react";
import Fade from "react-reveal/Fade";

const ServiceDetails = ({ service }) => {
  console.log(service);
  return (
    <Fade right cascade>
    <div className="col-md-2 mx-3 mt-2" style={{ width: "13rem" }}>
      <img className="card-img-top" style={{ maxWidth: "200px"}}src={service.img} alt="" />
      <div className="card-body">
        <h5 className="text-white text-center">{service.name}</h5>
      </div>
    </div>
    </Fade>
  );
};

export default ServiceDetails;
