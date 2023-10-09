import React, { useRef } from "react";
import "./contact.scss";
import html5 from "../../assets/images/html5.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import bootstrap from "../../assets/images/bootstrap.png";
import sass from "../../assets/images/sass.png";
import php from "../../assets/images/php.png";
import mysql from "../../assets/images/mysql.png";
import node from "../../assets/images/node.png";
import postgre from "../../assets/images/postgre.png";

import Github from "../../assets/images/githubIcon.png";
import Linkedin from "../../assets/images/linkedinIcon.png";
import Instagram from "../../assets/images/instagramIcon.png";
import Facebook from "../../assets/images/facebookIcon.png";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5v21775",
        "template_roynmps",
        form.current,
        "8zkIzVRZbTGiOEuhs"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="skills">
        <h1 className="skillTitle">My Skills</h1>
        <span className="skillDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, a.
          Totam, eius aut! Quas in, perferendis totam, incidunt nobis amet
          reprehenderit quidem accusantium fugit modi maxime doloremque quos
          pariatur voluptatum.
        </span>
        <div className="skillImg">
          <img src={html5} alt="" className="Img" />
          <img src={css} alt="" className="Img" />
          <img src={js} alt="" className="Img" />
          <img src={sass} alt="" className="Img" />
          <img src={bootstrap} alt="" className="Img" />
          <img src={node} alt="" className="Img" />
          <img src={react} alt="" className="Img" />
          <img src={php} alt="" className="Img" />
          <img src={mysql} alt="" className="Img" />
          <img src={postgre} alt="" className="Img" />
        </div>
      </div>
      <div id="contactMe">
        <h1 className="contactTitle">Contact Me</h1>
        <span className="contactDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, a.
          Totam, eius aut! Quas in, perferendis totam, incidunt nobis amet
          reprehenderit quidem accusantium fugit modi maxime doloremque quos
          pariatur voluptatum.
        </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            rows="5"
            placeholder="Your Messages"
            name="message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://github.com/garincsr">
              <img src={Github} alt="" className="linkImg" />
            </a>
            <a href="https://www.linkedin.com/in/garincaesar/">
              <img src={Linkedin} alt="" className="linkImg" />
            </a>
            <a href="https://www.facebook.com/garin.caesarsyanugiri">
              <img src={Facebook} alt="" className="linkImg" />
            </a>
            <a href="https://www.instagram.com/garincsr/">
              <img src={Instagram} alt="" className="linkImg" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
