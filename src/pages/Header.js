/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header class="bg-gray-800 ">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          href="/"
        >
          <span class="ml-3 text-2xl font-mono">DrawOwn.</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center  justify-center">
          <Link to="/blogs" className="">
            <a class="mr-5   text-white text-xl  ">Blogs</a>
          </Link>

          {user.email && (
            <Link to="/draw" className="">
              <a class="mr-5  text-white text-xl">Draw</a>
            </Link>
          )}
        </nav>
        {user?.email ? (
          <button
            onClick={logout}
            class="inline-flex items-center bg-red-500 border-0 py-2 text-white  px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
          >
            Log out
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        ) : (
          <Link to="/login">
            <button class="inline-flex items-center bg-red-500 border-0 py-2 text-white  px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
              Log In
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        )}
        <div className="m-4">
          {user.email && (
            <label
              tabIndex="0"
              className="w-10 h-10 flex justify-center items-center bg-red-700 text-white rounded-full uppercase  cursor-pointer "
            >
              {user?.displayName?.split(" ")[0]?.slice(0, 1)}
              {user?.displayName?.split(" ")[1]?.slice(0, 1)}
            </label>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
