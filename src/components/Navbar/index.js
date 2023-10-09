import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/images/logo-g-cropped.png";
import brussels from "../../assets/images/dot-svg.svg";
import More from "../../assets/images/menu.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // const element = document.getElementById("contactMe");
  // const headerOffset = 45;
  // const elementPosition = element.getBoundingClientRect().top;
  // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img src={logo} alt="logo" className="logo" />
        <img src={brussels} alt="brussels" className="brussels" />
      </div>
      <div className="navbarMenu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navbarMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navbarMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navbarMenuListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navbarMenuListItem"
        >
          Skills
        </Link>
      </div>
      <button
        className="navbarMenuBtn"
        offset={-150}
        onClick={() => {
          document.getElementById("contactMe").scrollIntoView({
            block: "end",
            inline: "center",
            behavior: "smooth",
          });

          // window.scrollTo({
          //   top: offsetPosition,
          //   behavior: "smooth",
          // });
        }}
      >
        <FontAwesomeIcon icon={faAddressBook} /> Contact Me
      </button>

      {/* MOBILE NAVBAR */}
      <img
        src={More}
        alt="Menu"
        className="hamberger"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className="mobileMenu"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobileListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="mobileListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="mobileListItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobileListItem"
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="contactMe"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobileListItem"
          onClick={() => setShowMenu(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
