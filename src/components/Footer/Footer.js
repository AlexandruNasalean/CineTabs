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
          <div className="col-lg-6 no-gutters" id="About-us">
            <h5> About us</h5>
            <p>
              Cinetab is the world’s most trusted recommendation resource for
              quality entertainment. As the leading online aggregator of movie
              and TV show reviews from critics, we provide fans with a
              comprehensive guide to what’s fresh in theaters and at home.
              <br />
              If you’re an entertainment fan looking for a recommendation, or to
              share an opinion, you’ve come to the right place.
            </p>
          </div>
          <div className="col-3"></div>
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
