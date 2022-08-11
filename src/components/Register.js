import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loadingimg from "./Loadingimg";
const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const { user, registerUser, signInWithGoogle, isLoading, authError } =
    useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    registerUser(loginData.email, loginData.password, loginData.name, navigate);

    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <div className="">
      <div class="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-4xl font-extrabold text-gray-900">
              Create an account
            </h2>
            <p class="mt-2 text-center text-xl text-gray-600">
              Or
              <a
                href="/login"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                Login your account
              </a>
            </p>
          </div>
          <form
            class="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleLoginSubmit}
          >
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div className="py-3">
                <label for="email-address" class="sr-only">
                  Enter Name
                </label>
                <input
                  onBlur={handleOnBlur}
                  id="email-address"
                  name="name"
                  type="name"
                  autocomplete="name"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Name"
                />
              </div>
              <div className="py-3">
                <label for="email-address" class="sr-only">
                  Email address
                </label>
                <input
                  onBlur={handleOnBlur}
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="py-3">
                <label for="password" class="sr-only">
                  Password
                </label>
                <input
                  onBlur={handleOnBlur}
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign Up
              </button>
              <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p class="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <button
                type="submit"
                onClick={handleGoogleSignIn}
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-green-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Google Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center">
        <div className=" flex justify-end py-12">
          {isLoading && <Loadingimg />}
        </div>
        <div className="text-green-500 text-2xl font-mono">
          {user?.email && <p>Create your account successfully!</p>}
        </div>
        <div className="text-red-600 text-2xl font-mono">
          {authError && <p>{authError}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
