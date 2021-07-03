import React from 'react'
import pic from "../Photos/pic.png";

export const AboutScreen = () => {
    return (
        <div id="about" className="container py-5">
        <div className="row">
      <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
      <img className="profile-img" src={pic} alt="Picture..."/>
      </div>
      </div>   

      <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me </h1>
          <p>
              Hello! I am Kishor Bhandari.<br></br>
              Occupation : Software Developer.<br></br>
              Country : Nepal.
          </p>
      </div>

      </div>  
      </div>
    )
}
