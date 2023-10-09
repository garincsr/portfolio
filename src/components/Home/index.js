import React from "react";
import "./home.scss";
import Logo from "../../assets/images/logo-react.svg";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section id="home">
      <div className="homeContent">
        <span className="tags">&lt;body&gt;</span>
        <span className="inside-tags">
          &lt;div className="home-content"&gt;
        </span>
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Garin</span> <br />
          Website Developer
        </span>
        <p className="introPara">
          Im a skilled and passionate Web Developer,
          <br /> especially in Front End Developer
        </p>
        <Link>
          <button
            className="btn"
            offset={-150}
            onClick={() => {
              document.getElementById("contactMe").scrollIntoView({
                block: "end",
                inline: "center",
                behavior: "smooth",
              });
            }}
          >
            <FontAwesomeIcon icon={faBriefcase} /> Hire Me
          </button>
        </Link>
        <span className="inside-tags">&lt;/div&gt;</span>
        <span className="tags">&lt;/body&gt;</span>
      </div>

      {/* React Logo Animation */}
      <img src={Logo} alt="logo" className="reactLogo" />
    </section>
  );
};

export default Home;
