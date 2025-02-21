import React from "react";
import flipkart from "../assets/flipkart.png";
import amazon from "../assets/amazon.png";
import HeroImage from "../assets/shoe_image.png";

const Hero = () => {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOU FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES
            YOUR FEET DESEVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className="hero-button">
            <button>SHop Now</button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shoping">
            <p>Also Available On</p>

            <div className="brand-icons">
              <img src={amazon} alt="amazon" srcset="" />
              <img src={flipkart} alt="flipkart" srcset="" />
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src={HeroImage} alt="hero_img" />
        </div>
      </main>
    </>
  );
};

export default Hero;
