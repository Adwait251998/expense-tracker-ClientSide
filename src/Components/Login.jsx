import { useEffect, useState } from "react";
import style from "../CSS/Login.module.css";
import axios from "axios";

function Login({ loginUpdateUserSession }) {
  const [userLogin, setUserLogin] = useState({ Email: "", Password: "" });
  function handleLoginFields(e) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  const SubmitLoginForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://localhost:7044/Login/Login",
        userLogin,
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("token", res.data.token);
      loginUpdateUserSession(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.loginContainer}>
      <form onSubmit={SubmitLoginForm} className={style.loginForm}>
        <h2 style={style.title}>Login</h2>

        <label style={style.label}>Email</label>
        <input
          type="email"
          name="Email"
          style={style.input}
          value={userLogin.Email}
          onChange={handleLoginFields}
          required
        />

        <label style={style.label}>Password</label>
        <input
          type="password"
          name="Password"
          value={userLogin.Password}
          style={style.input}
          onChange={handleLoginFields}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
