import React from 'react'
import logo1 from "../logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


import {Link as Customlink} from "react-router-dom";
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
  <div className="container-fluid">
    <Customlink className="navbar-brand" to="/"><img className="logo"src={logo1}/></Customlink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
    </button>
    <div className="bar" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Customlink className="nav-link active" aria-current="page" to="/">Home</Customlink>
        </li>
        <li className="nav-item">
          <Customlink  className="nav-link" to="/about">About me</Customlink>
        </li>
        <li className="nav-item">
          <Customlink className="nav-link" to="/services">Services</Customlink>
        </li>
       
        <li className="nav-item">
          <Customlink className="nav-link" to="/portfolio">Portfolio</Customlink>
        </li>
        <li className="nav-item">
          <Customlink  className="nav-link" to="/contact">Contacts</Customlink>
        </li>
  </ul>
  </div>
</div>
</div>
</nav>
        </div>
    )
}
