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
    useLocation();
    var account = useSelector((state) => state.accountReducer.account);
    const dispatch = useDispatch();

    const signout = async () => {
        await client.signout();
        dispatch(setAccount({ username: "Anonymous", role: Roles.ANONYMOUS }));
      };

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-edit">
            <Link className="navbar-brand logo-edits" to="/FoodFinder/">FoodFinder</Link>
            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarSupportedContent"
                aria-expanded={!isNavCollapsed}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link className="nav-link cr-co" to="/FoodFinder/home">Home </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link cr-co" to="/FoodFinder/search">Search </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/FoodFinder/login">LogIn/SignUp</Link>
                    </li>
                    <li className="nav-item">
                        <div class="dropdown dropdown-margin">
                            <a class="btn-profile dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                            </a>
                            {account.username !== "Anonymous" ? (
                                <ul class="dropdown-menu">
                                    <li><Link className="dropdown-item" to={`/FoodFinder/profile/${account._id}`}>View Profile</Link></li>
                                    <li><Link className="dropdown-item" to={`/FoodFinder/profile/edit/${account._id}`}>Edit Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/FoodFinder/home" onClick={signout}>Log Out</Link></li>
                                </ul>
                            ) : (
                                <ul class="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/FoodFinder/login">Log in</Link></li>
                                </ul>  
                            )}
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
                    <Link className="nav-link user" to={`/FoodFinder/${account.username === "Anonymous" ? "login" : `profile/${account._id}`}`}>Welcome, {account.username}</Link>
                )}
            </div>
        </nav>
    );
}

export default Navigation;
