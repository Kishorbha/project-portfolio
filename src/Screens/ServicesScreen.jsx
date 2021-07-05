import React from "react";

import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faBook, faDesktop, faDumbbell, faFileCode } from "@fortawesome/free-solid-svg-icons";

export const ServicesScreen = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">My Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>We design web page.</p>
            </div>
          </div>

          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>We devepop web page</p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faDumbbell}
                  size="2x"
                />
              </div>
              <h3>Personal Coach </h3>
              <p>We service for coaching</p>
            </div>
          </div>

          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faBook} size="2x" />
              </div>
              <h3>College Projects</h3>
              <p>We service final year college projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
