import React from "react";

import { Link, useNavigate } from "react-router-dom";
const Clue3 = () => {
  return (
    <>
    <section className="py-10 sm:py-10 lg:py-12 bg-red-200 vh-100%">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-indigo-600">
            <p className="text-xs font-semibold tracking-widest text-white uppercase">
              Clue & Guide..
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Here's a clue for solving a Sudoku..
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300"></p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12 ">
          <div className="transition-all duration-200 bg-white hover:shadow-xl border-4">
            <div className="py-10 px-9 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>

              <h3 className="mt-4 text-lg font-semibold text-black ">
              Look for the easy answers: Start by looking for any squares that only have one possible number. Fill them in first, as they will help you eliminate possibilities for other squares.
                <br />
                <br />
                <br />
                Check rows, columns, and boxes: Look at each row, column, and box (3x3 square) to see if there are any numbers that only fit in one square. If you find one, mark it down and eliminate it as a possibility for other squares in that row, column, or box.
              </h3>
              <p className="mt-4 text-base text-gray-600"></p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white hover:shadow-xl border-4">
            <div className="py-10 px-9 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>

              <h3 className="mt-8 text-lg font-semibold text-black">
              Use the process of elimination: When you've filled in all the easy answers and checked the rows, columns, and boxes, start filling in the squares that only have a few possibilities. Use the process of elimination to narrow down the options until you can fill in the correct number.
                <br />
                <br />
                
                Look for patterns: Look for patterns in the numbers already filled in. For example, if you see that a row already has 1, 2, 3, and 4 filled in, you know that the remaining numbers must be 5, 6, 7, and 8.
              </h3>
              <p className="mt-4 text-base text-gray-600"></p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white hover:shadow-xl border-4">
            <div className="py-10 px-9 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>

              <h3 className="mt-8 text-lg font-semibold text-black">
              Use trial and error: Sometimes, you'll get stuck and won't be able to figure out which number goes where. In those cases, use trial and error. Pick a square and try one of the possible numbers. If it doesn't work, try another number until you find the correct one.
                <br />
                <br />
                Stay organized: Keep track of the numbers you've filled in and the possibilities for each square. This will help you avoid making mistakes and make it easier to see which numbers are still missing.
              </h3>
              <p className="mt-4 text-base text-gray-600"></p>
            </div>
            
          </div>
          
          
        </div>
        
      </div>
      <button className="mt-10 mx-auto text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
    <Link to="/Puzzle3">Solve Sudoku</Link>{" "}
  </button>
    </section>
    
    </>
  );
};

export default Clue3;
