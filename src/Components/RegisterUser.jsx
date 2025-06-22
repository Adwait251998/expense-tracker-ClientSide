import { useEffect, useState } from "react";
import style from "../CSS/RegisterCustomerForm.module.css";
import axios from "axios";
import Header from "./Header";
function RegisterUser() {
  const [roleList, SetRoleList] = useState([]);
  const [userForm, setRegisterForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Role: 1,
    Password: "",
  });
  useEffect(() => {
    const FetchRoles = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7044/User/FetchRoleList"
        );

        const result = response.data;
        SetRoleList(result);
      } catch (error) {
        console.log(error);
      }
    };
    FetchRoles();
  }, []);

  const CreateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://localhost:7044/User/CreateUser",
        userForm,
        { headers: { "Content-Type": "application/json" } }
      );

      alert(res);
    } catch (error) {
      alert(error);
    }
  };

  function handleRegisterForm(e) {
    setRegisterForm({
      ...userForm,
      //[e.target.name]: e.target.value,
      [e.target.name]:
        e.target.name === "Role" ? parseInt(e.target.value) : e.target.value,
    });
  }

  return (
    <div className={`${style.registerForm} container mt-5`}>
      <div className="card p-4 shadow-sm rounded-4">
        <h2 className="mb-4 text-primary">Create user</h2>
        <form onSubmit={CreateUser}>
          <div className="mb-3">
            <label htmlFor="FirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter first name"
              name="FirstName"
              onChange={handleRegisterForm}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="LastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter last name"
              name="LastName"
              onChange={handleRegisterForm}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="Email"
              onChange={handleRegisterForm}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Role" className="form-label">
              Role
            </label>

            <select
              name="Role"
              className="form-select"
              id="customerType"
              onChange={handleRegisterForm}
            >
              {roleList.map((role) => (
                <option id={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              name="Password"
              onChange={handleRegisterForm}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Create Customer
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
