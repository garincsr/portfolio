import React from "react";
import "./about.scss";
import EduImg from "../../assets/images/bachelor2-icon.png";
import WebImg from "../../assets/images/website-icon.png";
import CertifImg from "../../assets/images/sertif-icon.png";

const About = () => {
  return (
    <section id="about">
      <span className="aboutTitle">About Me</span>
      <span className="aboutDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, a.
        Totam, eius aut! Quas in, perferendis totam, incidunt nobis amet
        reprehenderit quidem accusantium fugit modi maxime doloremque quos
        pariatur voluptatum.
      </span>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={EduImg} alt="EduImg" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Education</h2>
            <p>This is Demo Text, I still think what i should write</p>
          </div>
        </div>
        <div className="aboutBar">
          <img src={WebImg} alt="WebImg" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Website Development</h2>
            <p>This is Demo Text, I still think what i should write</p>
          </div>
        </div>
        <div className="aboutBar">
          <img src={CertifImg} alt="CertifImg" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Certificate</h2>
            <p>This is Demo Text, I still think what i should write</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
