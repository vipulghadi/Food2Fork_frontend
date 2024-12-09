import React, { useContext, useState } from "react";
import heroImage from "../assets/hero.png";
import Search from "./Search";
import { myContext } from "../store/AppStore";

function HeroSection({handleQuery}) {
  const {searchedQuery, setSearchedQuery}= useContext(myContext)

  

  return (
    <div className="w-full p-3 flex flex-wrap">
      <div className="left sm:w-5/12 w-full flex justify-center items-center mb-3 mt-2">
        <div className="box w-10/12">
          <div className="main-heading">
            <p className="font-bold text-[40px] leading-[50px]">
              Let Us <span className="text-color-1"> Predict </span> <br />
              Your Perfect <span className="text-color-1"> Meal </span>{" "}
            </p>
            <p className="mt-2 font-semibold">
              Welcome to Food2Fork, where culinary creativity meets
              convenience!Input your ingredients, and discover personalized dish
              predictions tailored to your pantry.Simplify your cooking journey
              with our platform.Let 's transform your ingredients into
              delightful meals effortlessly!
            </p>
            <div className="search-box mt-[15px]">
              <Search
                searchedQuery={searchedQuery}
                setSearchedQuery={setSearchedQuery}
                handleQuery={handleQuery}
              />
              <div className="word-suggestions w-full relative"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="right sm:w-7/12 w-full mt-[20px] bg-red-100 sm:mt-0">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
