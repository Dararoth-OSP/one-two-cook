import React from "react";
import { FaTiktok, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import footerIMG from "../../assets/footer-img.svg";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="border-t-2">
      <div className="relative max-w-[1150px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-footer gap-10 pt-20 pb-64 lg:pb-32 text-xl">
        <div className="col-span-full lg:col-span-1">
          <img src={logo} className="w-64"></img>
          <h1 className="text-3xl font-bold mt-10">OneTwoCook</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            repellendus
          </p>
          <span className="flex items-center gap-2 mt-16 mb-3 text-[#f56040]">
            Follow Us:
            <a href="https://www.tiktok.com/en/">
              <FaTiktok className="w-9 h-9" />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook className="w-9 h-9" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="w-9 h-9" />
            </a>
            <a href="https://telegram.org/">
              <FaTelegram className="w-9 h-9" />
            </a>
          </span>
          <span>Contact Us: +855 98 666 163</span>
        </div>
        <ul className="font-bold space-y-5">
          <span>Foods</span>
          <li>
            <a href="#">Desserts</a>
          </li>
          <li>
            <a href="#">Drinks</a>
          </li>
          <li>
            <a href="#">Random</a>
          </li>
          <li>
            <a href="#">International</a>
          </li>
        </ul>
        <ul className="space-y-5">
          <span className="font-bold">Recipes</span>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">For Upcoming Festival</a>
          </li>
          <li>
            <a href="#">For Special Occasion</a>
          </li>
        </ul>
        <ul className="space-y-5">
          <span className="font-bold">About Us</span>
          <li>
            <a href="#">Our Mussion</a>
          </li>
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Facts About Us</a>
          </li>
        </ul>
        <img src={footerIMG} className="absolute right-10 sm:right-20 -bottom-1" />
      </div>
      <div className="bg-[#f56040] text-xs sm:text-sm md:text-base  ">
        <div className="h-auto  max-w-[1150px] px-4 mx-auto flex flex-col md:flex-row md:py-4 gap-y-1 justify-between items-center text-zinc-50">
          <h1>Copyright © 2023. All rights reserved.</h1>
          <div className="flex gap-4 lg:gap-20">
            <a href="#">Terms and Condition</a>
            <a href="#">Privacy</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
