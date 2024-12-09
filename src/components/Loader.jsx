import React from "react";
import loading2 from '../assets/loader.gif'
function Loader() {
  return <div className="w-full  flex justify-center items-center flex-col p-3"> 
  
  <img src={loading2} alt="" className="w-[150px]" />
  <p className="uppercase font-semibold">serching best food for you</p>
  </div>;
}

export default Loader;
