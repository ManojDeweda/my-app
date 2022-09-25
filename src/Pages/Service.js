import React from "react";
import Card from "../Componant/Card";
import image1 from "../Assets/images/home/image1.jpeg";
import image2 from "../Assets/images/home/image2.jpeg";
import image3 from "../Assets/images/home/image3.jpeg";
import image4 from "../Assets/images/home/image4.jpeg";
import image5 from "../Assets/images/home/image5.jpeg";
import image6 from "../Assets/images/home/image6.jpeg";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Android Development" imgsrc={image1} />
              <Card title="Web Development" imgsrc={image2} />
              <Card title="Database Management" imgsrc={image3} />
              <Card title="Business Analytics" imgsrc={image4} />
              <Card title="Digital Marketing" imgsrc={image5} />
              <Card title="Video Creation" imgsrc={image6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
