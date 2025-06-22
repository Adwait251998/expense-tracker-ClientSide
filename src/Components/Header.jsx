import style from "../CSS/UserProfile.module.css";
import { NavLink } from "react-router-dom";
function Header({ userSession }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top px-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="/">
          Expense Tracker
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-primary fw-bold" : ""}`
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            {userSession && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active text-primary fw-bold" : ""}`
                  }
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
            )}
            {!userSession && (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${
                        isActive ? "active text-primary fw-bold" : ""
                      }`
                    }
                    to="/Register"
                  >
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${
                        isActive ? "active text-primary fw-bold" : ""
                      }`
                    }
                    to="/Login"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
