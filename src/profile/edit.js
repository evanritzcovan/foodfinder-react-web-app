import { useNavigate, useParams, Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as client from "./client";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;

function Edit() {
    var profilePic = 'https://res.cloudinary.com/drmzaqhgv/image/upload/v1702247974/profile_ztzzsd.png';
    var [account, setAccount] = useState(null);
    account = useSelector((state) => state.accountReducer.account);
    const updateUser = async () => {
      console.log(account.firstName);
      const status = await client.updateUser(account._id, account);
    };
    return (
        <header className="profile-header">
        <div className="profile-edit-content">
            <div className="col">
            <div className="row-3">
                <div className="center">
                <section className="photo_size" id="html">
                    <img style={{ width: 200, height: 200 }} src={profilePic} alt='Profile'/>
                </section>
                </div>
            </div>
            <div className="row">
                <div className="input-container">
                <input className="form-control" type="text" id="first-name" value={account.firstName} onChange={(e) => setAccount({
                ...account,
                firstName: e.target.value
              })} />
              <input type="text" id="last-name" value={account.lastName} onChange={(e) => setAccount({
                ...account,
                lastName: e.target.value
              })} />
              <input type="text" id="email" value={account.email} onChange={(e) => setAccount({
                ...account,
                email: e.target.value
              })} />
              <input type="text" id="zip-code" value={account.zipCode} onChange={(e) => setAccount({
                ...account,
                zipCode: e.target.value
              })} />
              <input type="text" id="phone" value={account.phone} onChange={(e) => setAccount({
                ...account,
                phone: e.target.value
              })} />
              <input type="text" id="password" value={account.password} onChange={(e) => setAccount({
                ...account,
                password: e.target.value
              })} />
              </div>
            </div>
            </div>
        </div>
        <Link
          key={"cancel"}
          to={`/FoodFinder/profile/${account._id}`}
          className="btn btn-danger button edit-button mt-5 me-2">
            Cancel
        </Link>        
        <Link
          key={"save"}
          to={`/FoodFinder/profile/${account._id}`}
          onClick={updateUser}
          className="btn btn-success button edit-button mt-5 me-2">
            Save
        </Link>    
        <Link
          key={"change_photo"}
          to={`/FoodFinder/profile/${account._id}`}
          className="btn btn-primary button edit-button mt-5 me-2">
            Change Photo
        </Link>    

        <input className="edit-button mt-5 me-2" type="file" id="image" name="image" value="" required />
      </header>
  );
}


export default Edit;