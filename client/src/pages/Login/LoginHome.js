import React, { useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import Carousel from "../../components/Carousel/Carousel";
import Hero from "../../components/Hero/Hero";
import { NavLink } from "react-router-dom";

const images = [
    "img-01.jpg",
    "img-02.jpg",
    "img-03.jpg",
    "img-04.jpg",
    "img-05.jpg",
    "img-06.jpg",
  ];

function LoginHome() {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, []);

  return (
    <div>
      {userData.user ? (
           <div className="row " id="Body">
           <Hero />
           <Carousel images={images} />
        
        <h1>Welcome {userData.user.displayName}</h1>
 <NavLink to="/book-appointment" className="menu-item">
            Book Appointment
          </NavLink>
        </div>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
export default LoginHome;
