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
        I hold a bachelor's degree in Computer Science majoring in information
        systems. I am passionate about the field of Information Technology,
        particularly in areas related to website development. I also have
        experience from a bootcamp at Binar Academy where I gained skills in
        JavaScript (Express.js, ReactJS, Node.js).
      </span>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={EduImg} alt="EduImg" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Education</h2>
            <p>
              I hold a Bachelor's degree in Computer Science with a major in
              Information Systems from Gunadarma University.
            </p>
          </div>
        </div>
        <div className="aboutBar">
          <img src={WebImg} alt="WebImg" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Website Development</h2>
            <p>
              The part I enjoy the most in website development is when I
              implement the design into code that will be displayed on the
              website.
            </p>
          </div>
        </div>
        <div className="aboutBar">
          <img src={CertifImg} alt="CertifImg" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Certificate</h2>
            <p>
              I have several certificates, you can{" "}
              <a
                className="clickCertif"
                href="https://drive.google.com/file/d/1kxoExQayLdrd9jO5k5275wWcbDKA9huJ/view?usp=sharing"
              >
                {" "}
                click
              </a>{" "}
              on this link
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
