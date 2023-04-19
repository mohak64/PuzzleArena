import React, { useEffect } from "react";
import avatar from "../assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import useFetch2 from "../hooks/contest.hook";
import { updateUser } from "../helper/helper";
import { Link, useNavigate } from "react-router-dom";
import puzzle2img from "../assets/puzzle2.jpeg"
import puzzle1img from "../assets/puzzle1.jpeg"
import puzzle3img from "../assets/puzzle3.jpeg"
import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";
import Ques from "./Ques";

export default function ContestPage() {
  const [{ isLoading, apiData, serverError }] = useFetch2();

  if (isLoading) return <h1 className="text-2xl font-bold">isLoading</h1>;
  if (serverError)
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;

  

  return (
    <>
    <div className="bg-red-100 vh-100">
      <div className="container ">
        <h1 className=" pt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Puzzle Arena
          </span>{" "}
          <span className="text-xl font-bold text-gray-900">
            Start Puzzling!
          </span>
        </h1>
        <p class="mt-2 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          "Every puzzle has its own unique solution waiting to be discovered,
          and with each solved puzzle, you sharpen your mind and expand your
          perspective."
        </p>
      </div>
      <div className="p-6 pt-14 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 ">
        <div
          key="1"
          className="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left"
        >
          <div
            className="flex h-full w-full flex-col justify-end rounded-3xl relative overflow-hidden border-8 "
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={puzzle1img}
              alt="Guess the word"
              className="object-cover w-full h-full rounded-[10px] z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute left-4 bottom-4 text-left">
              <h1 className="text-xl text-white font-semibold">
                "Guess the word"
              </h1>
              <p className="text-gray-300 mt-2">
                "Unscramble the letters to reveal a word that means "a strong feeling of excitement or anticipation."
              </p>

              <button className="mt-2 rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                <Link to="/puzzle1">Let's Guess</Link>{" "}
              </button>
            </div>
          </div>
        </div>
        {/* puzzle2 */}
        <div
          key="2"
          className="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left"
        >
          <div
            className="flex h-full w-full flex-col justify-end rounded-3xl relative overflow-hidden border-8"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={puzzle2img}
              alt="White Sneakers"
              className="object-cover w-full h-full rounded-[10px] z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute left-4 bottom-4 text-left">
              <h1 className="text-xl text-white font-semibold">
                "Sliding Puzzle"
              </h1>
              <p className="text-gray-300 mt-2">
              "The sliding puzzle is not just a game of rearranging pieces, it is a test of patience, strategy and determination to solve the seemingly impossible and emerge victorious."
              </p>

              <button className="mt-2 rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                <Link to="/puzzle2">Slide Now</Link>{" "}
              </button>
            </div>
          </div>
        </div>

        {/* puzzle3 */}
        <div
          key="3"
          className="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left"
        >
          <div
            className="flex h-full w-full flex-col justify-end rounded-3xl relative overflow-hidden border-8"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={puzzle3img}
              alt="White Sneakers"
              className="object-cover w-full h-full rounded-[10px] z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute left-4 bottom-4 text-left">
              <h1 className="text-xl text-white font-semibold">
                "Sudoku-oduku"
              </h1>
              <p className="text-gray-300 mt-2">
              "Crack the code of the grid with the power of logic and deduction, become a Sudoku solving master."
              </p>

              <button className="mt-2 rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                <Link to="/puzzle3">Solve 9x9</Link>{" "}
              </button>
            </div>
          </div>
        </div>

        {/* puzzle4 */}
        <div
          key="4"
          className="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left"
        >
          <div
            className="flex h-full w-full flex-col justify-end rounded-3xl relative overflow-hidden border-8"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={puzzle2img}
              alt="White Sneakers"
              className="object-cover w-full h-full rounded-[10px] z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute left-4 bottom-4 text-left">
              <h1 className="text-xl text-white font-semibold">
                "Sliding Puzzle"
              </h1>
              <p className="text-gray-300 mt-2">
              "The sliding puzzle is not just a game of rearranging pieces, it is a test of patience, strategy and determination to solve the seemingly impossible and emerge victorious."
              </p>

              <button className="mt-2 rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                <Link to="/puzzle2">Slide Now</Link>{" "}
              </button>
            </div>
          </div>
        </div>

        {/* puzzle5 */}
        <div
          key="5"
          className="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left"
        >
          <div
            className="flex h-full w-full flex-col justify-end rounded-3xl relative overflow-hidden border-8"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={puzzle2img}
              alt="White Sneakers"
              className="object-cover w-full h-full rounded-[10px] z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute left-4 bottom-4 text-left">
              <h1 className="text-xl text-white font-semibold">
                "Sliding Puzzle"
              </h1>
              <p className="text-gray-300 mt-2">
              "The sliding puzzle is not just a game of rearranging pieces, it is a test of patience, strategy and determination to solve the seemingly impossible and emerge victorious."
              </p>

              <button className="mt-2 rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                <Link to="/puzzle2">Slide Now</Link>{" "}
              </button>
            </div>
          </div>
        </div>


      </div>
      </div>
    </>
  );
}

//  contestPage
