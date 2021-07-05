import React from "react";
import emailjs from "emailjs-com";
// import { useForm } from "react-hook-form";
// import { useState } from "react";

export const ContactScreen = () => {
  const serviceID = "service_ID";
  const templatedID = "template_ID";
  const userID = "user_YS9Wm9HX3C1O7pzvhOZpM";
  const sendEmail= (e)=> {
    e.preventDefault();

    emailjs.sendForm(serviceID, templatedID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

 

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>Contact me</h1>
      </div>

      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="contact-text">
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
                <div className="line"></div>
            </div>

            <div className="text-center">
              <input
                type="number"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
              />
                <div className="line"></div>
            </div>
            <div className="text-center">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
                <div className="line"></div>
            </div>
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
                <div className="line"></div>
            </div>
            <div className="text-center">
              <textarea
                type="text"
                className="form-control"
                placeholder="Please describe your subject shortly"
                name="description"
              ></textarea>
              <div className="line"></div>
            </div>
          </div>

          <button className="contact-button" type="submit">
            Contact me
          </button>
        </form>
      </div>
    </div>
  );
};
