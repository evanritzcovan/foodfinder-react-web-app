import React from 'react';
import './index.css';
import { Roles } from '../login/roles';
import { useSelector } from "react-redux";

function Contact() {
  const account = useSelector((state) => state.accountReducer.account);
  if (account.role === Roles.ANONYMOUS) {
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
  return (
    <div className="contact-container">
      <h1>We'd Love to Hear From You!</h1>

      <div className="contact-info">
        <p><strong>Phone:</strong> <a href="tel:+19143748801">+1 914-374-8801</a></p>
        <p><strong>Email:</strong> <a href="mailto:evanritzcovan@gmail.com">evanritzcovan@gmail.com</a></p>
      </div>

      <form className="contact-form" action="/submit-form" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="map-container">
        <p>Map Placeholder</p>
      </div>
    </div>
  );
}

export default Contact;
