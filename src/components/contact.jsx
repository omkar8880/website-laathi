import { useState } from "react";
import emailjs from "emailjs-com";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import React from "react";


// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyAAMZ4SiaLtVRBqMaXehzDwWYZ55dAOfNE",
  authDomain: "laathi-webpage.firebaseapp.com",
  projectId: "laathi-webpage",
  storageBucket: "laathi-webpage.appspot.com",
  messagingSenderId: "679746648873",
  appId: "1:679746648873:web:9cf21b2e7b533eb004d538",
  measurementId: "G-QNNG4QGVQW"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const clearState = () => {
    setState({ ...initialState });
    setIsSubmitted(true); // Set form submission flag
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, message);

    try {
      await firestore.collection("contactData").add({
        name,
        email,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log("Form data saved to Firestore");
      clearState();
    } catch (error) {
      console.error("Error saving form data to Firestore:", error);
    }

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {isSubmitted ? (
        <div style = {{backgroundColor : "#e05753" , height : "16rem"}}> 
        <div className="container text-center" style = {{color : "white" , paddingTop : "3.5rem"}}>
          <h3 style = {{color : "white"}}>Thank you for contacting us!</h3>
          <p>We will get back to you as soon as possible.</p>
        </div>
        </div>
      ) : (
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we will
                    get back to you as soon as possible.
                  </p>
                </div>
                <form name="sentMessage" validate onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href={props.data ? props.data.facebook : "/"}>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.linkedin : "/"}>
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.instagram : "/"}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.whatsapp : "/"}>
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.email1 : "/"}>
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div id="footer">
        <div className="container text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()} Laathi ™ {" "}
            </p>
        </div>
      </div>
    </div>
  );
};