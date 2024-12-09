import React, { createContext, useContext, useState } from "react";

export const myContext = createContext();

 export const Provider = ({ children }) => {
    const [recipeResult,setRecipeResult]=useState([])
    const [searchedQuery,setSearchedQuery]=useState(null)

  return (
    <myContext.Provider value={{ recipeResult, setRecipeResult,searchedQuery,setSearchedQuery}}>
      {children}
    </myContext.Provider>
  );
};



