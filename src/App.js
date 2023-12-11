import React, { useState } from "react";
import Navigation from "./navigation";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Login from "./login";
import Search from "./search";
import Profile from "./profile";
import UserList from "./profile/list";
import Contact from './contact';
import Details from "./details";
import Edit from "./profile/edit";

function App() {
    return (
        <HashRouter>
            <div className="d">
                <Navigation />
                <div className="style-bg">
                    <Routes>
                        <Route path="/FoodFinder/" element={<Home />} />
                        <Route path="/FoodFinder/home" element={<Home />} />
                        <Route path="/" element={<Navigate to="/FoodFinder/home" />} />
                        <Route path="/FoodFinder/admin/users" element={<UserList />} />
                        <Route path="/FoodFinder/login" element={<Login />} />
                        <Route path="/FoodFinder/search" element={<Search />} />
                        <Route path="/FoodFinder/search/:food/:location" element={<Search />} />
                        <Route path="/FoodFinder/details/:restaurantId" element={<Details/>} />
                        <Route path="/FoodFinder/profile/:id" element={<Profile />} />
                        <Route path="/FoodFinder/profile/edit/:id" element={<Edit />} />
                        <Route path="/FoodFinder/about" element={<About />} />
                        <Route path="/FoodFinder/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;