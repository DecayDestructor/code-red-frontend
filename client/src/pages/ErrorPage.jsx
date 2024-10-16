import React from "react";
import { Link, useRouteError, useNavigate } from "react-router-dom";
import { Info } from "@mui/icons-material";
import Lottie from "lottie-react";
import animationData from "../assets/animations/code-red.json";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  // console.log(error);
  let title = "An error occurred";
  let message = error?.message || "Something went wrong";
  if (error?.status === 404) {
    title = "404 Page Not Found";
    message = error.error.message || "Check your URL";
  } else if (error?.status === 403) {
    title = "403 Forbidden";
    message = "You are not authorized to access this page";
  } else if (error?.status === 500) {
    title = "500 Internal Server Error";
    message = error.error.message || "Something went wrong";
  } else if (error?.status === 422) {
    title = "422 Unprocessable Entity";
    message = error.data.message || "Something went wrong";
  }
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center bg-black text-yellow-300 p-4">
      <div className="w-72 md:w-[25rem]">
        <Lottie animationData={animationData} />
      </div>
      <h1 className="text-xl font-semibold md:text-4xl flex gap-3">
        <span className="text-red-600 font-bold">Code Red!</span>
        {title}
      </h1>
      <p className="text-sm text-gray-400 md:text-xl">{message}</p>
      <div className="flex">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-1.5 px-3 md:py-2 md:px-4 rounded text-sm md:text-base"
        >
          Go Back
        </button>
      </div>
      <p className="text-gray-400 flex flex-col gap-2 items-center text-sm md:text-base flex-wrap md:flex-row">
        <Info /> Seems like the Psycho Soft-Physicist has been up to no good
        again.
      </p>
    </div>
  );
};

export default ErrorPage;
