import React from "react";
import "./project.scss";
import Project1 from "../../assets/images/landing-page.png";
import Project2 from "../../assets/images/catalog.png";
import Project3 from "../../assets/images/product-edit.png";
import Project from "../../assets/videos/carRentWebsite.mp4";
import Project5 from "../../assets/images/PI-1.jpg";
import Project6 from "../../assets/images/PI-2.jpg";

const Porto = () => {
  return (
    <section id="project">
      <h2 className="proTitle">My Projects</h2>
      <span className="proDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, a.
        Totam, eius aut! Quas in, perferendis totam, incidunt nobis amet
        reprehenderit quidem accusantium fugit modi maxime doloremque quos
        pariatur voluptatum.
      </span>
      <div className="proImg">
        <img src={Project1} alt="" className="screenShot" />
        <img src={Project2} alt="" className="screenShot" />
        <img src={Project3} alt="" className="screenShot" />
        <img src={Project5} alt="" className="screenShotPI" />
        <img src={Project6} alt="" className="screenShotPI" />
        <video src={Project} autoPlay loop muted className="screenShotGif" />
      </div>
      {/* <button className="seeMoreBtn">See More</button> */}
    </section>
  );
};

export default Porto;
