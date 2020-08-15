import React from "react";
import Icon from "@mdi/react";
import { mdiCamera } from "@mdi/js";

import Header from "./Header";
import Card from "./Card";

//Get svg as components
import { ReactComponent as HeartLogo } from "../../asset/svg/heart.svg";
//Load user images
import person from "../../asset/img/person-singing.png";
//Load styling
import "./landing.css";

const Landing = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="banner">
        <img src={person} alt="user" />
      </section>
      <Card />
      <section className="ad-container">
        <div className="ad-block">Add Space</div>
        <div className="ad-block">Add Space</div>
        <div className="ad-block">Add Space</div>
      </section>
    </React.Fragment>
  );
};

export default Landing;
