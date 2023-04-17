import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers";

import { Link, useNavigate } from "react-router-dom";

function puzzle2() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"));
    }
  }, []);

  const handleImageChange = (e) => {
    setImgUrl(e.target.value);
    window.history.replaceState(
      "",
      "",
      updateURLParameter(window.location.href, "img", e.target.value)
    );
  };

  return (
    <div className="App">
      <h1 className=" mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-purple-400">
          Sliding puzzle
        </span>
      </h1>
      <p class="mb-6 text-lg font-bold text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        A sliding puzzle test is a type of puzzle game that involves sliding
        tiles within a grid in order to solve the puzzle.
        <br /> The goal is typically to arrange the tiles in a specific order,
        often by sliding them one at a time, until a particular pattern of digit
        is formed.{" "}
      </p>
      <Board imgUrl={imgUrl} />
      <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        <Link to="/puzzle1clue">Clue & Guide</Link>{" "}
      </button>
      <input  value={imgUrl} onChange={handleImageChange} />

      
    </div>
  );
}

export default puzzle2;
