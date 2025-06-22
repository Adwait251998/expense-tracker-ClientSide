import { useEffect } from "react";
import style from "../CSS/UserProfile.module.css";
import axios from "axios";
import { useState } from "react";

function UserProfile({ userData, setUserData }) {
  const [currentUserEmail, setCurrentUserEmail] = useState(
    "kulkarniadwait1@gmail.com"
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const FetchUserData = async () => {
      try {
        setIsLoading(true);
        debugger;
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://localhost:7044/User/GetCustomerByEmail/${encodeURIComponent(
            currentUserEmail
          )}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUserData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        window.location.href = "/login";
        console.log("Falied to fetch user data!:" + error);
      }
    };
    FetchUserData();
  }, []);

  return (
    <div className={style.profileCard}>
      <h2 className="text-center mb-4">User Profile</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <div className={style.profileLabel}>First Name</div>
            <div className={style.profileValue}>{userData.firstName}</div>
          </div>
          <div className={style.divider}></div>
          <div>
            <div className={style.profileLabel}>Last Name</div>
            <div className={style.profileValue}>{userData.lastName}</div>
          </div>
          <div className={style.divider}></div>
          <div>
            <div className={style.profileLabel}>Email</div>
            <div className={style.profileValue}>{userData.email}</div>
          </div>
          <div className={style.divider}></div>
          <div>
            <div className={style.profileLabel}>Role</div>
            <div className={style.profileValue}>{userData.role}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
