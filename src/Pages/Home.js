import React from "react";
import Common from "../Shared/Common";
import web from "../Assets/images/home/image4.jpeg";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get started"
      />
    </>
  );
}

export default Home;
