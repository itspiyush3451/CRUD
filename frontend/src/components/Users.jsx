import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Users = () => {
  const [users, setUsers] = useState([
    {
      ID: 101,
      Name: "Piyush Yadav",
      Age: 22,
      Email: "piyus123@gmail.com",
    },
  ]);
  return (
    <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success float-start mb-3">
          Add +
        </Link>
        {/* <h1 className="text-center">Users</h1> */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.ID}</td>
                  <td>{user.Name}</td>
                  <td>{user.Age}</td>
                  <td>{user.Email}</td>
                  <td>
                    <Link to="/update" className="btn btn-dark">
                      Update
                    </Link>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
