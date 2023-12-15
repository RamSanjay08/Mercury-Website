import React from "react";
import Logo from "../svg/qmU7tgmwRQ3dXL9yHkp9GDxbrv0.svg"
import Arrow from "../svg/uparrow.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-around mt-12">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="flex justify-center">
        <ul className="flex gap-14 text-color-#0e0e11">
          <li>Product</li>
          <li>Compare</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-7">
        <button><a href="" className="border-black border text-black py-3 px-5 rounded-full">Login</a></button>
        <button className="text-white py-3 px-5 rounded-full bg-black flex justify-center items-center gap-2" >Let's Talk<img src={Arrow} alt="" /></button>
      </div>
    </nav>
  );
};

export default Navbar;
