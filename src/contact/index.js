import React, { useState } from "react";
import "./index.css";
import { Roles } from "../login/roles";
import { useSelector } from "react-redux";
import * as client from "../contact/client.js";

function Contact() {
  const [contact, setContact] = useState({ name: "", email: "", subject: "", message: "" });
  const [messageOn, setMessageOn] = useState(false);
  var account = useSelector((state) => state.accountReducer.account);

  if (account.role === Roles.GUEST) {
    return (
      <div className="contact-container">
        <h3>Please <a href="#/FoodFinder/login">login / register</a> first to access this page.</h3>
      </div>
    );
  }
  
  if (account.role === Roles.ADMIN) {
    return (
      <div className="contact-container">
        <h3>Admin user cannot access this page</h3>
        <h3>Please <a href="#/FoodFinder/login">login</a> to another account to access this page.</h3>
      </div>
    );
  }

  const createContact = async (contact) => {
    await client.createContact(contact);
    setMessageOn(true);
  }

  return (
    <div className="contact-container">
      <h1>We'd Love to Hear From You!</h1>
      <div className="contact-info">
        <p><strong>Phone:</strong> <a href="tel:+19143748801">+1 914-374-8801</a></p>
        <p><strong>Email:</strong> <a href="mailto:evanritzcovan@gmail.com">evanritzcovan@gmail.com</a></p>
      </div>
      {messageOn ? (
        <div className="card card-edi mx-auto">
          <div className="card-header">
            Message Received!
          </div>
          <div className="card-body">
            <p className="card-text">Thank you! You will hear from us shortly!</p>
          </div>
        </div>
      ) : (
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); createContact(contact) }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={(e) => setContact({ ...contact, name: e.target.value })} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={(e) => setContact({ ...contact, email: e.target.value })} />
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" onChange={(e) => setContact({ ...contact, subject: e.target.value })} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required onChange={(e) => setContact({ ...contact, message: e.target.value })}></textarea>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
