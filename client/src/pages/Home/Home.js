import React, { useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import Hero from "../../components/Hero/Hero";
import "./Home.scss";
import Services from "../../components/Services/Services";

const images = ["img-04.jpg"];

function Home() {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (!userData.user) history.push("/");
  }, []);

  return (
    <div className="home">
      <Hero />
      <Services />
    </div>
  );
}
export default Home;
