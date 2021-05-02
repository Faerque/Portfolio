import React from "react";
import Project from "../../Project/Project";
import Service from "../../Service/Service";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Header> </Header>
      <Service> </Service>
      <Skills> </Skills>
      <Project></Project>
      <Contact> </Contact>
      <Footer> </Footer>
    </div>
  );
};

export default Home;
