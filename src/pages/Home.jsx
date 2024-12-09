import React, { useContext, useEffect } from "react";

import HeroSection from "../components/HeroSection";
import ResultSection from "../components/ResultSection";
import Loader from "../components/Loader";

import recipeApi from "../api/clientAPI";
import { useState } from "react";
import { myContext } from "../store/AppStore";

// import LodingPage from "./LodingPage";

function Home() {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
   const {recipeResult,setRecipeResult}=useContext(myContext)
   

  function handleQuery(value) {
      if (value && value.length>0){
        setLoading(true)
        recipeApi.getRecipe(value)
        .then((resp)=>{
         
          setTimeout(()=>{
 setLoading(false)
          },2000)
           if( resp.status=="ok"){
                 setRecipeResult(resp.data)
                 console.log(recipeResult);
                 setIsSuccess(true)
           }
          
        })
        .catch((error)=>{
          setLoading(false)
         
          console.log(error);
        })

      }
  }
 

  return (
    <>
   <div className="w-full flex flex-col items-center">
    <div className="hero-section  sm:w-11/12 w-full mt-[60px]">
      <HeroSection  handleQuery={handleQuery} />
    </div>
    {loading==true?
      <div className="loader-section w-full ">
    <Loader/>
  </div>
  :isSuccess==true?
  <div className="result-section sm:w-11/12 w-full mt-4">
  <ResultSection recipeResult={recipeResult}/></div>:null
  }
 

   
  
  </div>
  </>
  );
}

export default Home
