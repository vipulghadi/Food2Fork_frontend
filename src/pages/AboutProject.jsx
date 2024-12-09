import React from "react";
import axios from "axios";

function AboutProject() {
    
    return <div className=" w-full mt-[60px] p-3 flex flex-col justify-center items-center" > 
    <div className="docs sm:w-11/12 mb-5 ">
    <h1 className="text-[20px] font-bold border-b-2 mb-2"> Docs</h1>
    <div className="para text-[15px]">
    <p className="mb-2">Welcome to the Recipe Search Website, a platform designed to help users discover similar dishes based on their input ingredients. Before using this application, it's essential to understand the steps required to ensure optimal functionality and usability.</p>
    <h1 className="text-[18px] font-bold  mb-2">Usage Guidelines:</h1>
    <p className="mb-1">    Start by entering the ingredients you have or wish to include in your recipe. Use the provided input field to type in the names of the ingredients.
    Ensure that each ingredient is spelled correctly and is in English to yield accurate recipe suggestions.</p>
    
    <p className="mb-1">    After entering the desired ingredients, initiate the search process by clicking the search button or pressing Enter.
    The application will then process the provided ingredients and generate a list of similar dishes based on the input. These dishes will utilize the ingredients you've specified, providing you with recipe options that match your preferences.</p>
    <p className="mb-1">    Once the search results are displayed, take the time to explore the suggested dishes.
    Each recipe suggestion will include details such as the name of the dish, a list of ingredients, preparation instructions, and possibly additional information such as cooking time or difficulty level.</p>
    <p className="mb-1">    If the initial search results do not meet your requirements or preferences, consider refining your search by adjusting the input ingredients.
    Experiment with different ingredient combinations to discover a wider variety of recipe options that align with your culinary preferences.</p>
    <h1 className="text-[18px] font-bold  mb-1 mt-5">Important Notes</h1>
    <p> <span className="font-semibold">Language Limitation: </span>Currently, the application only supports English ingredient names. Use of other languages may result in inaccurate or incomplete search results.</p>



    <p> <span className="font-semibold">Development Phase: </span>Please note that the Recipe Search Website is currently in the development phase. As such, certain features may be limited or undergoing refinement.
    Your feedback and suggestions are highly appreciated as they contribute to the ongoing improvement and development of the platform.</p>
    </div>
    
 
    
    
    </div>
    
    
    </div>;
}

export default AboutProject