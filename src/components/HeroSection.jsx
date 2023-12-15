import React from "react";
import Mobile from "../assests/1JFj3FwlaG94oqSBTQUOdyY6nHA.webp"
import icon1 from "../assests/mjpixPbzIMix5MtxX2IOrVDtKA.webp"
import icon2 from "../assests/ChLTRKDcxHYxLN5gf9LJPecpk8.webp"
import icon3 from "../assests/8TysGUZ0I12C6YWxZUdhVfEus.webp"
import backdrop from "../assests/hY7dz3uD5cYp9mzioTBHqQvUw.webp"
import Gradient from "./App.css";
import Apple from "../svg/apple.svg"

const HeroSection = () => {
  return (
    <section className="flex justify-around">
      <div>
      <div className="mt-16">
        <p className="border-2  py-2 px-4 rounded-full inline">Financal Management</p>
        <h1 className="text-8xl my-9 font-semibold">
          A Simpler,<br />smarter basic<br />credit <span className={Gradient}>card.</span>
        </h1>
        <p className="">
          Your powerful companion on the road to financial success! Explore <br />
          personal budget management, investment opportunities.
        </p>
      </div>
      <div className="mt-9 flex gap-6">
        <button className="text-white py-3 px-5 rounded-full bg-black flex justify-center items-center gap-2" >
          <img src={Apple} alt="" /> App Store
        </button>
        <div className="w-12 flex">
          <img className="border rounded-full translate-x-4 " src={icon1} alt="" />
          <img className="border rounded-full z-10 translate-x-2" src={icon2} alt="" />
          <img className="border rounded-full" src={icon3} alt="" />
        </div>
        <div className="translate-x-20">
          <p className="font-bold">24K+</p>
          <p className="">Active Us</p>
        </div>
      </div>
      </div>
      <div className="w-4/12 -translate-y-16 -z-10 static">
        <img src={backdrop} alt="" className=" rounded-2xl "/>
      <div className="w-10/12 absolute top-36 -left-32">
        <img src={Mobile} alt="" className=""/>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
