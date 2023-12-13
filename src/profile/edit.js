import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as client from "./client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;

function Edit() {
  const profilePic = 'https://res.cloudinary.com/drmzaqhgv/image/upload/v1702247974/profile_ztzzsd.png';
  var account = useSelector((state) => state.accountReducer.account);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "",
  });
  
  const updateUser = async () => {
    await client.updateUser(account._id, account);
  };
  
  return (
    <header className="profile-header">
      <div className="profile-edit-content">
        <div className="col">
          <div className="row-3">
            <div className="center">
              <section className="photo_size" id="html">
                  <img style={{ width: 200, height: 200 }} src={profilePic} alt="ProfileImage"/>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <input type="text" id="first-name" placeholder={account.firstName} defaultValue={null} onChange={(e) => setCredentials({...credentials, firstName: e.target.value})}/>
              <input type="text" id="last-name" placeholder={account.lastName} defaultValue={null} onChange={(e) => setCredentials({...credentials, lastName: e.target.value})}/>
              <input type="text" id="email" placeholder={account.email} defaultValue={null} onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>
              <input type="text" id="zip-code" placeholder={account.zipCode} defaultValue={null} onChange={(e) => setCredentials({...credentials, zipCode: e.target.value})}/>
              <input type="text" id="phone" placeholder={account.phone} defaultValue={null} onChange={(e) => setCredentials({...credentials, phone: e.target.value})}/>
              <input type="text" id="password" placeholder={account.password} defaultValue={null} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            </div>
          </div>
        </div>
      </div>
      <Link key={"cancel"} to={`/FoodFinder/profile/${account._id}`} className="btn btn-danger button edit-button mt-5 me-2">Cancel</Link>        
      <Link key={"save"} to={`/FoodFinder/profile/${account._id}`} onClick={updateUser} className="btn btn-success button edit-button mt-5 me-2">Save</Link>    
      <Link key={"change_photo"} to={`/FoodFinder/profile/${account._id}`} className="btn btn-primary button edit-button mt-5 me-2">Change Photo</Link>    
      <input className="edit-button mt-5 me-2" type="file" id="image" name="image" value="" required />
    </header>
  );
}

export default Edit;
