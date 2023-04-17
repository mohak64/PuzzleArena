import React, { useEffect } from "react";
import avatar from "../assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import useFetch2 from "../hooks/contest.hook";
import { updateUser } from "../helper/helper";
import { Link, useNavigate } from "react-router-dom";

import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";
import Ques from "./Ques";

export default function ContestPage() {
  const [{ isLoading, apiData, serverError }] = useFetch2();

  if (isLoading) return <h1 className="text-2xl font-bold">isLoading</h1>;
  if (serverError)
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;

  function Puzzle1() {
    navigate("/Puzzle1");
  }

  return (
    <>
      <div className="container">
        <h1 className=" mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Puzzle Arena
          </span  >
          {" "}
          <span className="text-xl font-bold text-gray-900">
          Start Puzzling!
          </span>
        </h1>
        <p class="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        "Every puzzle has its own unique solution waiting to be discovered, and with each solved puzzle, you sharpen your mind and expand your perspective."
        </p>
      </div>
      <div className="p-5 pt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        <div
          key="1"
          className="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left"
        >
          <div
            className="flex h-full w-full flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="White Sneakers"
              className="object-cover w-full h-full rounded-[10px] z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute left-4 bottom-4 text-left">
              <h1 className="text-xl text-white font-semibold">
                "White Sneakers"
              </h1>
              <p className="text-gray-300 mt-2">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?"
              </p>

              <button className="text-base text-white cursor-pointer mt-2 font-semibold">
                <Link to="/puzzle1">Login</Link>{" "}
              </button>
            </div>
          </div>
        </div>
        {/* puzzle2 */}
        <div
          key="1"
          className="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left"
        >
          <div
            className="flex h-full w-full flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="White Sneakers"
              className="object-cover w-full h-full rounded-[10px] z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute left-4 bottom-4 text-left">
              <h1 className="text-xl text-white font-semibold">
                "White Sneakers"
              </h1>
              <p className="text-gray-300 mt-2">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?"
              </p>

              <button className="text-base text-white cursor-pointer mt-2 font-semibold">
                <Link to="/puzzle1">Login</Link>{" "}
              </button>
            </div>
          </div>
        </div>

        {/* puzzle3 */}
        <div
          key="1"
          className="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left"
        >
          <div
            className="flex h-full w-full flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="White Sneakers"
              className="object-cover w-full h-full rounded-[10px] z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute left-4 bottom-4 text-left">
              <h1 className="text-xl text-white font-semibold">
                "White Sneakers"
              </h1>
              <p className="text-gray-300 mt-2">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?"
              </p>

              <button className="text-base text-white cursor-pointer mt-2 font-semibold">
                <Link to="/puzzle1">Login</Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//  contestPage
