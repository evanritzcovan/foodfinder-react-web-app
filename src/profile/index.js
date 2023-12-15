/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { setAccount } from '../login/accountReducer';
import { useSelector, useDispatch } from "react-redux";
import { Roles } from '../login/roles';
import * as client from "../profile/client";
import * as bookmarkClient from "../bookmark/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const BASE_API = "https://foodfinder-node-server-app.onrender.com";
export const USERS_API = `${BASE_API}/api/users`;

function Profile() {
  const profilePic = 'https://res.cloudinary.com/drmzaqhgv/image/upload/v1702247974/profile_ztzzsd.png';
  var account = useSelector((state) => state.accountReducer.account);
  const dispatch = useDispatch();
  const [bookmarks, setBookmarks] = useState([]);
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userZipCode, setUserZipCode] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const { id } = useParams();

  const signout = async () => {
    await client.signout();
    dispatch(setAccount({ username: "Anonymous", role: Roles.ANONYMOUS }));
  };

  const fetchBookmarks = async () => {
    const bookmarks = await bookmarkClient.findRestaurantsThatUserBookmarks(id);
    setBookmarks(bookmarks);
  };

  const deleteBookmark = async (restaurantId) => {
    await bookmarkClient.deleteUserBookmarksRestaurant(id, restaurantId)
  }

  const fetchUserData = async () => {
    const u = await client.findUserById(id);
    setUserFirstName(u.firstName);
    setUserLastName(u.lastName);
    setUserEmail(u.email);
    setUserZipCode(u.zipCode);
    setUserRole(u.role);
  };

  useEffect(() => {
    fetchBookmarks();
    fetchUserData();
  });
  
  return (
    <div>
      {account && (
        <header className="profile-header">
          <div className="profile-content">
            <div className="row">
              <div className="profile-personal-image col-sm-1">
                <section className="photo_size" id="html">
                  <img style={{ width: 150, height: 150 }} src={profilePic} alt="ProfileImage"/>
                </section>
              </div>
              <div className="profile-personal-info col-sm-5">
                { account.role === Roles.ANONYMOUS && (
                  <span><b>{<b>{userFirstName} {userLastName}</b>}</b><br/>{<b>{userZipCode}</b>}</span>   
                )}
                { account.role === Roles.ADMIN && (
                  <span><b>{<b>{userFirstName} {userLastName} {userRole}</b>}</b><br/>{<b>{userEmail}</b>}<br/>{<b>{userZipCode}</b>}</span>
                )}
                { account.role !== Roles.ADMIN && account.role !== Roles.ANONYMOUS && ( 
                  <span><b>{<b>{userFirstName} {userLastName}</b>}</b><br/>{<b>{userEmail}</b>}<br/>{<b>{userZipCode}</b>}</span>
                )}
              </div>
            </div>
          </div>
          
          {account.role !== Roles.ANONYMOUS && (
            <div className="row">
              <div className="col-sm-4">
                <div className="profile-bookmark-info row-1 mt-5"><h3>Bookmarked Restaurants</h3></div>
                <div className="list-group">
                  {bookmarks.map((bookmark, index) => (
                    <li key={index} className="list-group-item">
                      <Link className="bookmark-items" to={`/FoodFinder/details/${bookmark.restaurantId}`}>
                        {bookmark.restaurantName}
                        {account._id === id &&
                          <Link className="btn btn-danger button bookmark-delete-button" onClick={() => deleteBookmark(bookmark.restaurantId)}>Delete</Link>                            
                        }
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          )}
          {account.role !== Roles.ANONYMOUS ? (
            <Link key={"list"} to={'/FoodFinder/home'} onClick={signout} className="btn btn-danger button edit-button mt-5 me-2">Log Out</Link>
          ) : (
            <Link key={"list"} to={'/FoodFinder/login'} className="btn btn-success button edit-button mt-5 me-2">Log In</Link>
          )}
          {account._id === id &&
            <Link key={"edit"} to={`/FoodFinder/profile/edit/${account._id}`} className="btn btn-success button edit-button mt-5 me-2">Edit Profile</Link>          
          }
          <a>{account.role}</a>
          {account.role === Roles.ADMIN && (
            <Link key={"list"} to={'/FoodFinder/admin/users'} className="btn btn-warning button edit-button mt-5 me-2">Profile List</Link>
          )}
        </header>
      )}
    </div>
  )
};

export default Profile;
