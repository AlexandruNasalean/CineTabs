import React from "react";
import "./Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export function Footer (){
  return( 
        <footer>
        <div className="footer">
          <div className="description">
            <h5 >About the website</h5>
            <div className="Website-Description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget enim eleifend, luctus nisi eget, 
      pretium odio. Quisque id tellus ex. Nunc pharetra molestie eleifend. 
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            </div>
            <div className="contact">
            <h5>Contact</h5>
            </div>
              <div className="icoane">
                <FontAwesomeIcon icon={faEnvelope}/><p>neptunTeam@scit.com</p>
                <FontAwesomeIcon icon={faPhone}/><p>+40 8978 5254 6484</p>
            </div>
            </div>
            </footer>

  )}
