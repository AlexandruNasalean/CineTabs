import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
  
         <div className="footer">
           <divc className="footer-title">
           <p>About us</p>
           <p>Contact</p>
           </divc>
         <div className="footer-description">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Integer consequat diam non fringilla feugiat. 
             Vivamus sit amet viverra nibh. 
             </p>
             <p><FontAwesomeIcon icon={faEnvelope}/ ></p>
             <p><FontAwesomeIcon icon={faPhone}/ ></p>
         </div>
         </div>
         
  );
}
