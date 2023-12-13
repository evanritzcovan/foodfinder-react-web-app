/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as client from "../profile/client";
import { Roles } from '../login/roles';
import { setAccount } from '../login/accountReducer';

function Navigation() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const { pathname } = useLocation();
  var account = useSelector((state) => state.accountReducer.account);
  const dispatch = useDispatch();

  const signout = async () => {
    const status = await client.signout();
    dispatch(setAccount({ username: "Anonymous", role: Roles.ANONYMOUS }));
  };

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-edit">
      <Link className="navbar-brand logo-edits" to="/FoodFinder/">FoodFinder</Link>
      <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <Link className="nav-link cr-co" to="/FoodFinder/home">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link cr-co" to="/FoodFinder/search">Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/FoodFinder/login">Log In/Sign Up</Link>
          </li>
          <li className="nav-item active">
            <div class="dropdown dropdown-margin">
              <a class="btn-profile dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</a>
              <ul class="dropdown-menu">
                {account._id !== undefined && (
                  <div>
                    <li><Link className="dropdown-item" to={`/FoodFinder/profile/${account._id}`}>Profile</Link></li>
                    <li><Link className="dropdown-item" to={`/FoodFinder/profile/edit/${account._id}`}>Edit Profile</Link></li>
                    <li><Link className="dropdown-item dropdown-items" to="/FoodFinder/home" onClick={signout}>Log Out</Link></li>
                  </div>
                )}
                {account._id === undefined && (
                    <li><Link className="dropdown-item" to="/FoodFinder/login">Log in</Link></li>
                )}
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/FoodFinder/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/FoodFinder/contact">Contact</Link>
          </li>
        </ul>
        {account && (
          <Link className="nav-link user" to={!account._id ? `/FoodFinder/login` : `/FoodFinder/profile/${account._id}`}>
            Welcome, {!account._id ? 'Anonymous' : account.firstName}
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
