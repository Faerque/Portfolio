import React from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Client_Satisfaction from "./Service_Image/Client_Satisfaction.svg";
import Responsive from'./Service_Image/reponsive.svg';
import Web_Design from './Service_Image/Web_Design.svg';
import Web_Development from './Service_Image/web_development.svg';

const ServiceData =[
    {
        name: "Client Satisfaction",
        detail: "loreamjndfjdshfjakfjdjahffiuadhfkjadhfkjadhfdjku",
        img: Client_Satisfaction
    },
    {
        name: "Web Design",
        detail: "loreamjndfjdshfjakfjdjahffiuadhfkjadhfkjadhfdjku",
        img: Web_Design
    },
    {
        name: "Responsive Website",
        detail: "loreamjndfjdshfjakfjdjahffiuadhfkjadhfkjadhfdjku",
        img: Responsive
    },
    {
        name: "Web Development",
        detail: "loreamjndfjdshfjakfjdjahffiuadhfkjadhfkjadhfdjku",
        img: Web_Development
    }
]

const Service = () => {
  return (
    <section className="container container-sm">
      <div className="row">
        <div className="text-white" style={{marginTop: '120px'}}>
            <h3> My <span style={{ color: "#FC0D7A" }}>Services:</span></h3>
            <hr/>
        </div>
        <div className="d-flex container justify-content-center">
        <div className="row w-75">
            {
                ServiceData.map((service) => <ServiceDetails service={service} >  </ServiceDetails> )
            }
        </div>
      </div>
      </div>
    </section>
  );
};

export default Service;
