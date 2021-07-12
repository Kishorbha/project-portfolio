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
            "This is my official website",
            "I am a Software Developer",
            
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></Typed>

        <a href="https://linkfly.to/30711aTmng2" className="btn-main-offer">
          Follow me
        </a>
      </div>
    </div>
  );
};
