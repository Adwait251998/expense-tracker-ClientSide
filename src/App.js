import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";
import Header from "./Components/Header";
import RegisterUser from "./Components/RegisterUser";
import { useState } from "react";
import Login from "./Components/Login";

function App() {
  const [userSession, setUserSession] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });
  function loginUpdateUserSession(userInfo) {
    setUserSession(userInfo);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Header userSession={userSession} />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/profile"
                element={
                  <UserProfile userData={userData} setUserData={setUserData} />
                }
              />
              <Route path="/Register" element={<RegisterUser />} />
              <Route
                path="/Login"
                element={
                  <Login loginUpdateUserSession={loginUpdateUserSession} />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
