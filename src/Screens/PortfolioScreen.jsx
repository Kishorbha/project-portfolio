import React from "react";
import pic from "../Photos/pic1.png";
import pic1 from "../Photos/pic.png";
import pic2 from "../Photos/pic2.png";
import pic3 from "../Photos/pic3.png";
import pic4 from "../Photos/pic4.png";
import pic5 from "../Photos/pic5.png";

import { faSearchDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PortfolioScreen = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5 text-white">
          Portfolio
        </h1>

        <div className="image-box-wrapper row justify-content-center">
          <div className="image-box">
            <img className="portfolio-img" src={pic} alt="...Photo1" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchDollar} />
          </div>
          {/* - */}
          <div className="image-box">
            <img className="portfolio-img" src={pic1} alt="...Photo2" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchDollar} />
          </div>
          <div className="image-box">
            <img className="portfolio-img" src={pic2} alt="...Photo1" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchDollar} />
          </div>
          {/* - */}
          <div className="image-box">
            <img className="portfolio-img" src={pic3} alt="...Photo1" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchDollar} />
          </div>
          {/* - */}
          <div className="image-box">
            <img className="portfolio-img" src={pic4} alt="...Photo1" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchDollar} />
          </div>

           {/* - */}
           <div className="image-box">
            <img className="portfolio-img" src={pic5} alt="...Photo1" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchDollar} />
          </div>
          
        </div>
      </div>
    </div>
  );
};
