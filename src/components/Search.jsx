import React from "react";
import { useState } from "react";
function Search({ searchedQuery,setSearchedQuery,handleQuery}) {
   
  return  (
    <div className="w-full">
      <label htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={searchedQuery}
          id="default-search"
          className="block w-full p-4 ps-10 text-[15px]  border border-gray-300 font-semibold rounded-lg"
          placeholder="tomato,chicken,garlic etc"
          onChange={(e)=>{
            setSearchedQuery(e.target.value)
          }}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5  font-medium rounded-lg text-sm px-4 py-2  bg-[#ff5c01]"
       onClick={()=>{
        handleQuery(searchedQuery)
       }} >
     
          Search
        </button>
      </div>
    </div>
  )
}
export default Search;
