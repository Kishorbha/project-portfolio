import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useState } from "react";


export const ContactScreen = () => {
   
  const [sucessMessage, setSucessMessage] = useState("");
  const {
    register,
    handleSubmit,    
    formState: { errors }
  } = useForm();

  const serviceID = "service_ID";
  const templatedID = "template_ID";
  const userID = "user_YS9Wm9HX3C1O7pzvhOZpM";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templatedID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templatedID, variables, userID) => {
    emailjs
      .send(serviceID, templatedID, variables, userID)
      .then(() => {
        setSucessMessage("Form sent Sucessful");
      })
      .catch((err) => console.error(`Something Went Wrong ${err}`));
  };

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>Contact me</h1>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-text">
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", {
                  required: "Please enter your name",
                  maxLength: {
                    value: 20,
                    message:
                      "Please enter a name with fewer than 20 characters",
                  },
                })}
              />
              <div className="line"></div>
            </div>
            <span className="error-message">
              {errors.name && errors.name.message}
            </span>
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                aria-invalid={errors.phone ? "true" : "false"}
                {...register("phone", {
                  required: "Please enter your phone number",
                  maxLength: {
                    value: 20,
                    message:
                      "Please enter a name with fewer than 20 characters",
                  },
                })}
              />
              <div className="line"></div>
            </div>
            <span className="error-message">
              {errors.phone && errors.phone.message}
            </span>
            <div className="text-center">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", {
                  required: "Please enter your email",
                  maxLength: {
                    value: 20,
                    message:
                      "Please enter a name with fewer than 20 characters",
                  },
                })}
              />
              <div className="line"></div>
            </div>
            <span className="error-message">
              {errors.email && errors.email.message}
            </span>
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                aria-invalid={errors.subject ? "true" : "false"}
                {...register("subject", {
                  required: "Please write subject",
                  maxLength: {
                    value: 20,
                    message:
                      "Please enter a name with fewer than 20 characters",
                  },
                })}
              />
              <div className="line"></div>
            </div>
            <span className="error-message">
              {errors.subject && errors.subject.message}
            </span>
            <div className="text-center">
              <textarea
                type="text"
                className="form-control"
                placeholder="Please describe your subject shortly"
                name="description"
                aria-invalid={errors.description ? "true" : "false"}
                {...register("description", {
                  required: "Describe your needs",
                  maxLength: {
                    value: 20,
                    message:
                      "Please enter a name with fewer than 20 characters",
                  },
                })}
              ></textarea>
              <div className="line"></div>
            </div>
            <span className="error-message">
              {errors.description && errors.description.message}
            </span>
          </div>

          <button className="contact-button" type="submit">
            Contact me
          </button>
        </form>
      </div>
    </div>
  );
};
