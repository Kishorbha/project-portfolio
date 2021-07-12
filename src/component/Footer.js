import React from "react";
import { Gmap } from "./Gmap";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";
import {Link as Customlink} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <p>Copyright © 2021 | Kishor Bhandari | All Rights Reserved</p>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <Customlink  to="/gmap">Kanchanpur, Nepal </Customlink>
            </div>
            <div className="d-flex">
              <a href="tel:0977-9848745555">+977-9848762254</a>
            </div>
            <div className="d-flex">
              <p>kishorbhandari608@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>

              <div className="col">
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center ">
            <div className="flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/bhandarikishor007/"}
                quote="Software Developer"
                hashtag="#react"
              >
                <FacebookIcon className="mx-3" size={33}></FacebookIcon>
              </FacebookShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/kishor-bhandari-a5203420b/"}
                quote="Software Developer"
                hashtag="#react"
              >
                <LinkedinIcon className="mx-3" size={33}></LinkedinIcon>
              </LinkedinShareButton>
              <FacebookMessengerShareButton
                url={"https://www.facebook.com/messages/t"}
                quote="Software Developer"
                hashtag="#react"
              >
                <FacebookMessengerIcon
                  className="mx-3"
                  size={33}
                ></FacebookMessengerIcon>
              </FacebookMessengerShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
