import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import HomeAboutComponent from "../../components/Home-About/HomeAbout";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <Carousel />
        <div className="homeaboutcomponent_section">
          <HomeAboutComponent />
        </div>
      </div>
    </>
  );
};

export default Home;
