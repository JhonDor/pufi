import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
const NewsLetter = () => {
  return (
    <div>
      <div className="media">
        <span>NEWSLETTER</span>
        <p>SUBSCRIBETE</p>
        <small>Y enterate de las novedades</small>
        
        <ContactForm />
        
      </div>
      
    </div>
  );
};

export default NewsLetter;
