import React from "react";
import Common from "./Common";
let imgg = "https://source.unsplash.com/collection/wallpaper/800x600";
const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With "
        imgsrc={imgg}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
