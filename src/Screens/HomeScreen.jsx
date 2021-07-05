import React from "react";
import Typed from "react-typed";

export const HomeScreen = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Welcome To My website</h1>
        <Typed
          style={{
            color: "white",
            fontSize: "2rem",
            fontFamily: "RobotoCondensed",
          }}
          strings={[
            "I am Kishor Bhandari",
            "This is my Portfolio",
            "I am a Software Developer",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></Typed>

        <a href="https://www.facebook.com/bhandarikishor007/" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
};
