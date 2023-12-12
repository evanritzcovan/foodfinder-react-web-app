import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPencil, BsFillCheckCircleFill, BsTrash3Fill, BsPlusCircleFill } from "react-icons/bs"
import { Roles } from "../login/roles";
import * as client from "./client";

function UserList() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: Roles.USER });

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (error) {
      console.log(error);
    }
  };

  const selectUser = async (user) => {
    try {
      const selectedUser = await client.findUserById(user._id);
      setUser(selectedUser);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async () => {
    try {
      await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <td><b>Username</b></td>
            <td><b>First Name</b></td>
            <td><b>Last Name</b></td>
          </tr>
          <tr>
            <td>
              <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
              <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
            </td>
            <td>
              <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="BUSINESS_OWNER">Business Owner</option>
              </select>
            </td>
            <td className="text-nowrap">
              <BsPlusCircleFill onClick={createUser} className="text-primary fs-1 text"/>
              <BsFillCheckCircleFill onClick={updateUser} className="me-2 text-success fs-1 text"/>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
                <button className="btn btn-success me-2">
                  <BsTrash3Fill onClick={() => deleteUser(user)}/>
                </button>
                <button className="btn btn-success me-2">
                  <BsPencil onClick={() => selectUser(user)}/>
                </button>
                <Link to={`/FoodFinder/profile/${user._id}`} className="btn btn-primary button">
                  Profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
