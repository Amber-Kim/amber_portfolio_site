import React, { useState, useRef } from "react";

// Styles
import "./contact.css";

// Email Js
import emailjs from "emailjs-com";

// image
import avatar2 from "../../images/avatar2.png";

// Components
import { Heading } from "../Heading/Heading";
import Button from "components/Button/Button";

const Contact = () => {
  const INITIAL_VALUES = { email: "", message: "" };
  const [notification, setNotification] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [loading, setLoading] = useState(false);

  // Email-js
  const form = useRef();

  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        `service_28w359i`,
        `template_90q1vle`,
        form.current,
        `ccpBz8biC0_VeC6G_`
      );
      console.log("result ", result.text);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  // Email-js

  const clearForm = () => {
    setValues(INITIAL_VALUES);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("form submitted !", values);
    // TODO : Send data to your email
    setLoading(true);
    await sendEmail();
    setLoading(false);
    clearForm();
    setNotification(true);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="contact" name="contact" id="contact" data-aos="fade-right">
      <Heading text="Contact" style={{ marginBottom: "3rem" }} />
      <div className="content">
        <div className="left">
          <img src={avatar2} alt="avatar2" />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit} ref={form}>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              required
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <Button
              text={loading ? "Sending..." : "Send"}
              loading={loading}
              type="submit"
            />
            {notification && (
              <span style={{ color: "green", marginTop: "1rem" }}>
                Thank you, I will reply ASAP :)
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
