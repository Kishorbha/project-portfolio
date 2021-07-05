import React from "react";
import pic from "../Photos/pic1.png";
import pic1 from "../Photos/pic.png";
import pic2 from "../Photos/pic2.png";
import pic3 from "../Photos/pic3.png";
import pic4 from "../Photos/pic4.png";
import pic5 from "../Photos/pic5.png";
// import { faSearchDollar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PortfolioScreen = () => {
  return (
    <div className="container">
            <div className="gallery">
            
                <figure className="gallery__item gallery__item--1">
                    <img src={pic} alt="Gallery  1" className="gallery__img"/>
                   
                </figure>
               
             
                <figure className="gallery__item gallery__item--2">
                    <img src={pic1} alt="Gallery  2" className="gallery__img"/>
                   
                </figure>
                
               
                <figure className="gallery__item gallery__item--3">
                    <img src={pic2} alt="Gallery  3" className="gallery__img"/>
                   
                </figure>
                
                
                <figure className="gallery__item gallery__item--4">
                    <img src={pic3} alt="Gallery  4" className="gallery__img"/>
                  
                </figure>
                
               
                <figure className="gallery__item gallery__item--5">
                    <img src={pic4} alt="Gallery  5" className="gallery__img"/>
                   
                </figure>
                
                <figure className="gallery__item gallery__item--6">
                    <img src={pic5} alt="Gallery  6" className="gallery__img"/>
                   
                </figure>
                
            </div>
        </div>
  );
};





