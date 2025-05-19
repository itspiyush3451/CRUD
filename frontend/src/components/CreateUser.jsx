import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const [userid, setUserid] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/createUser", {
        userid,
        name,
        age,
        email,
      });
      if (res.status === 200 || res.status === 201) {
        console.log("User created successfully:", res.data);
        // Could show success message here
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-4 shadow-lg">
        <h2 className="text-start mb-4 text-dark border-bottom pb-2">
          Add User
        </h2>

        <form className="text-start" onSubmit={Submit}>
          <div className="mb-3">
            <label
              htmlFor="userId"
              className="form-label fw-bold text-secondary"
            >
              ID
            </label>
            <input
              type="text"
              id="userId"
              placeholder="Enter ID"
              className="form-control border-primary"
              value={userid}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="userName"
              className="form-label fw-bold text-secondary"
            >
              Name
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Enter Name"
              className="form-control border-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="userAge"
              className="form-label fw-bold text-secondary"
            >
              Age
            </label>
            <input
              type="number"
              id="userAge"
              placeholder="Enter Age"
              className="form-control border-primary"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="userEmail"
              className="form-label fw-bold text-secondary"
            >
              Email
            </label>
            <input
              type="email"
              id="userEmail"
              placeholder="Enter Email"
              className="form-control border-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
            <button
              type="submit"
              className="btn btn-dark btn-lg px-4 shadow-sm"
            >
              <i className="bi bi-person-plus-fill me-2"></i>Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
