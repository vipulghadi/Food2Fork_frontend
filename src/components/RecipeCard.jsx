import React, { useEffect ,useState} from "react";
import foodApi from "../api/FoodImage";
import defaultImage from '../assets/defaultFood.jpg'


function RecipeCard({ recipe }) {
  const [Image, setImage] = useState(null)

  
  useEffect(()=>{
    foodApi.getRecipeImage(recipe.recipeName).then((resp)=>{
      // setImage(resp.photos[0].url)
      console.log(resp);
    }).catch((error)=>{
      console.log(error);
    })
  })
  return (
    <div className="sm:w-[250px] flex flex-col bg-white p-5 rounded-md w-full relative sm:mr-5 mb-5 shadow-2xl">
      <div className="dish-country absolute uppercase bg-[#ff5c01] text-white px-2 py-1 sm:text-[10px] text-[15px] rounded-md top-[25px] right-[25px]">
        {recipe.cuisine}
      </div>
      <div className="img w-full h-[200px] bg-green-200">
        <img
          src={Image? Image:defaultImage}
          alt=""
          className="object-cover h-full w-full"
        />
      </div>
      <div className="diet-type sm:text-[10px] text-[12px] ml-auto font-semibold text-gray-500">
        {recipe.diet}
      </div>
      <p className="font-bold uppercase mt-[1px] ">
     
        {recipe.recipeName.slice(0, 20) + ".."}
      </p>
      <h4 className="sm:text-[12px]  text-[15px] uppercase text-color-1 font-semibold">
        Ingradients{" "}
      </h4>{" "}
      <p className="ingradients h-[80px] overflow-y-scroll sm:text-[12px] text-[18px] text-gray-700">
        {" "}
        {recipe.ingredients}{" "}
      </p>{" "}
      <a href={recipe.url} target="_blank">
        {" "}
        <button className="w-full px-2 py-2 rounded-md bg-[#ff5c01] text-white uppercase font-semibold mt-4  text-[15px]">
          {" "}
          Lets Try{" "}
        </button>
      </a>
    </div>
  );
}

export default RecipeCard;
