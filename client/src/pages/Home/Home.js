import React, { useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import Carousel from "../../components/Carousel/Carousel";
import Hero from "../../components/Hero/Hero";
import { NavLink } from "react-router-dom";
import "./Home.scss";
import Waiver from "../../components/Waiver/Waiver";
import  PageHero  from '../../components/Hero/PageHero';
import Services from "../../components/Services/Services";
const images = [
 // "img-01.jpg",
 // "img-02.jpg",
   //"img-03.jpg",
   "img-04.jpg",
  // "img-05.jpg",
  // "img-06.jpg",
];

function Home() {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (!userData.user) history.push("/");
  }, []);

  return (
    <div className="home">
      <PageHero title='home' />
      <Hero />
      <Services />
      {/* <Carousel images={images} className="home-image" /> */}

      {/* <div className="home-container">
        <Services />
        {userData.user ? (
          <div className="home-body" id="Body">
            <h1 className="home-welcome">
              Welcome {userData.user.displayName} !
            </h1>
            <NavLink to="/book-appointment" className="home-link">
              <button className="home-btn">Book Appointment</button>
            </NavLink>
            <Waiver />
           
          </div>
        ) : (
          <>
            <h2>You are not logged in</h2>
          <Link to="/login">Login</Link>
          </>
        )}
      </div> */}
     
    </div>
  );
}
export default Home;


// import React from "react";
// import { Link } from "react-router-dom";
// import Hero from "../../components/Hero/Hero";
// import Banner from "../../components/Banner/Banner";
// import Services from "../../components/Services/Services";
// // import FeaturedRooms from "../components/FeaturedRooms";

// const Home = () => {
//   return (
//     <>
//       <Hero>
//         <Banner
//           title="luxurious rooms"
//           subtitle="deluxe rooms starting at $299"
//         >
//           <Link to="/rooms" className="btn-primary">
//             our rooms
//           </Link>
//         </Banner>
//       </Hero>
//       <Services />
//       {/* <FeaturedRooms /> */}
//     </>
//   );
// };

// export default Home;
