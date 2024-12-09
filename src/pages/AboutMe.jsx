import React from "react";
import profilepic from '../assets/profilepic.png'
function AboutMe() {
  return <div className="w-full mt-[100px] flex justify-center items-center"> 
  
     <div className="card  p-3 sm:w-4/12 flex flex-col items-center w-11/12 mb-5">
     <img src={profilepic} alt="" className="w-[180px] h-[180px]  rounded-full object-cover " />
     <div className="my-intro w-full   mt-2  flex flex-col justify-center items-center">
  <h3 className="font-bold text-[20px]">Vipul Ghadi</h3>
  <p className="text-[16px] text-gray-700 font-semibold">Software Developer</p>
     <div className="btn flex space-x-3 mt-3">
     <a href="https://www.linkedin.com/in/vipul-ghadi-b4a9ab226/" target="_blank">
     
     <button className="px-2 py-1  rounded-md text-white text-[15px] bg-[#007ab5]"> LinkedIn</button></a>
     <a href="https://github.com/vipulghadi" target="_blank">
     <button className="px-2 py-1  rounded-md text-white text-[15px] bg-black"> GitHub</button></a>
     
     </div>
     <div className="my-info w-full mt-3">
     <p className="text-[14px] font-semibold text-center">I am a third - year AI and DS student at JEC Jabalpur, interested in both frontend and backend development, as well as machine learning with a focus on General AI.Continuously seeking to expand my skill set, I am dedicated to enhancing my knowledge and expertise in these areas to contribute effectively to the field.</p>
     
     
     
     </div>
     </div>
     
     
     </div>
  
  


</div>;
}

export default AboutMe;
