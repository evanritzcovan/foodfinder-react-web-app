import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";
import * as client from "./client";
import { setAccount } from "./accountReducer";
import { Roles } from "./roles";

function Login() {
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [registerSucceed, setRegisterSucceed] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "", role: Roles.USER });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dayOptions = [];
  for (let i = 1; i <= 31; i++) {
    dayOptions.push(
      <option key={i} value={i}>{i}</option>
    );
  }

  const yearOptions = [];
  for (let i = 1901; i <= 2023; i++) {
    yearOptions.push(
      <option key={i} value={i}>{i}</option>
    );
  }

  const signup = async () => {
    if (
      !credentials.username ||!credentials.password || !credentials.firstName || !credentials.lastName ||
      !credentials.email || !credentials.zipCode || !credentials.phone
    ) {
      setError("Please fill out all required fields.");
      return;
    }
    
    try {
      await client.signup(credentials);
      setIsRegister(false);
      setRegisterSucceed(true);
      setError("");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const fetchAccount = async () => {
    dispatch(setAccount(await client.account()));
  };

  const signin = async () => {
    if (
      !credentials.username ||
      !credentials.password
    ) {
      setError("Please fill out all required fields.");
      return;
    }

    try {
      await client.signin(credentials);
      await fetchAccount();
      navigate("/FoodFinder/home");
    } catch (err) {
      setError("Login failed, please register.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>{isRegister ? "Register" : "Login"}</h2>
        {error && <div>{error}</div>}
        {registerSucceed && <div>Account created, please login</div>}
        <div className="input-container2">
          <input type="text" placeholder="Username" onChange={(e) => setCredentials({...credentials, username: e.target.value})} required />
          <input type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})} required />
        </div>
        {isRegister && (
          <div>
            <div className="input-container2">
              <input type="text" id="first-name" placeholder="First Name" onChange={(e) => setCredentials({...credentials, firstName: e.target.value})} required />
              <input type="text" id="last-name" placeholder="Last Name" onChange={(e) => setCredentials({...credentials, lastName: e.target.value})} required />
              <input type="text" id="email" placeholder="Email" onChange={(e) => setCredentials({...credentials, email: e.target.value})} required />
              <input type="text" id="zip-code" placeholder="Zip Code" onChange={(e) => setCredentials({...credentials, zipCode: e.target.value})} required />
              <input type="text" id="phone" placeholder="Phone" onChange={(e) => setCredentials({...credentials, phone: e.target.value})} required />
            </div>
            <div className="role-container">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" checked={credentials.role === Roles.ADMIN}
                onChange={() => setCredentials({...credentials, role: Roles.ADMIN})} id="AdminRole" />
                <label className="form-check-label" for="AdminRole">Admin</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" checked={credentials.role === Roles.USER}
                onChange={() => setCredentials({...credentials, role: Roles.USER})} id="UserRole" />
                <label className="form-check-label" for="UserRole">User</label>
              </div>
            </div>
          </div>
        )}
        {!isRegister && (
          <div className="button-container">
            <button type="button" className="btn btn-primary login" onClick={() => { setIsRegister(true); }}>Register</button>
            <button type="button" className="btn btn-primary login" onClick={signin}>Login</button>
          </div>
        )}
        {isRegister && (
          <div className="button-container">
            <button type="submit" className="btn btn-success login" onClick={signup}>Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
