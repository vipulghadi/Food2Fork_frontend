import React, { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { myContext } from "../store/AppStore";

function ResultSection() {
    const { searchedQuery, setSearchedQuery, recipeResult } = useContext(myContext);

    return ( <
        div className = "w-full p-2  flex flex-col" >
        <
        p className = "uppercase font-bold text-[18px] mb-1 ml-3" > Result
        for < /p> <
        div className = "query ml-3 p-2 text-[14px] border  text-gray-500" >
        <
        p > { searchedQuery } < /p> <
        /div> <
        div className = "result-recipe w-full flex flex-wrap " > {
            recipeResult && recipeResult.length > 0 && recipeResult.map((r) => {
                return <RecipeCard recipe = { r }
                />
            })
        } <
        /div> <
        /div>
    );
}

export default ResultSection;