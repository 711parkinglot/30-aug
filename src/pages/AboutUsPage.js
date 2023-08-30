import React from "react";
import "./AboutUsPage.css";

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <h1 className="about-us-title">About Us</h1>
      <div className="media-container">
        <div className="media">
          <img src="./imgaes/team.png" alt="Team" />
          <div className="media-content">
            <p>The Team</p>
          </div>
        </div>
        <div className="media">
          <img src="./images/mission.png" alt="Mission" />
          <div className="media-content">
            <p>Our Mission</p>
          </div>
        </div>
        <div className="media">
          <img src="./images/values.png" alt="Values" />
          <div className="media-content">
            <p>Our Values</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
