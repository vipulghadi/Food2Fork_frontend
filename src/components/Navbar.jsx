import React from "react";
import { Link } from "react-router-dom";
import { useParams ,useLocation} from "react-router-dom";
function Navbar() {
  const params=useLocation()
  const path=params.pathname
  
  return (
    <div className="w-full py-5 flex justify-between sm:px-[50px] px-2 fixed top-0 z-10 bg-white">
      <div className="left">
        <h1 className="font-bold text-[22px] uppercase px-3"><span className="text-color-1">Food</span>2Fork</h1>
      </div>
      <div className="right flex space-x-2 font-semibold mr-2">
        <Link to={"/"} className={`${path=='/' && 'text-color-1'}`}>Home</Link>
        <Link to={"/docs"} className={`${path=='/docs' && 'text-color-1'}`}>Docs</Link>
        <Link to={"/about-me"} className={`${path=='/about-me' && 'text-color-1'}`}>About Me</Link>
      </div>
    </div>
  );
}

export default Navbar;
