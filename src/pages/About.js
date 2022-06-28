import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Michelle Zinger</div>
            <div className="brief_description">
              <p> I am a rising Junior at Northeastern University in Boston, MA.</p>
              <p> I am studying Computer Science with a concentration in Software.</p>
              <p> I am originally from Westchester, NY.</p>
            </div>
            <div>
          <p>Connect with Me!</p>
          <button type = "button"><a href="https://www.linkedin.com/in/michellezinger23/">LinkedIn</a></button>
          <button type = "button"><a href="https://github.com/mzinger1">Github</a></button>
        </div>
          </div>
        </div>
      </div>
    );
  }
}
