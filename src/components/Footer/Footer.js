import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <div className="background">
      <div className="container">
        <div className="row">
          <div className="col-md no-gutters" id="About-us">
            <h5> About us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
              enim eleifend, luctus nisi eget, pretium odio. Quisque id tellus
              ex.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
              enim eleifend, luctus nisi eget,
            </p>
          </div>
          <div className="col-6"></div>
          <div className="col-md no-gutters" id="Contact">
            <Link className="link" to="/Contact">
              <h5>Contact</h5>
            </Link>
            <div className="contact-info">
              <div className="contact-envelope">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>neptunTeam@scit.com</p>
              </div>
              <div className="contact-phone">
                <FontAwesomeIcon icon={faPhone} />
                <p>+40 8978 5254 6484</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
