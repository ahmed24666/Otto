import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = React.useState("");
  const [errorSignup, seterrorSignup] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("email", email);

    fetch("https://siedra-shop.com/api/auth/forgotPassword", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === false) {
          console.log(data);
          seterrorSignup("This email is not registered.");
        } else {
          // "Check Your Email To Reset Your Password."
          seterrorSignup(null);
          navigate("/reset-password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div class="relative py-3 md:w-[500px] w-full mx-auto">
      <div class="relative px-4 py-10 bg-white max-md:mx-3 md:mx-0 shadow rounded-3xl sm:p-10">
        <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div class="flex items-center space-x-5 justify-center">
            <img src={logo} alt="" className="w-[100px]" />
          </div>
          <div class="mt-5">
            <label
              class="font-semibold text-sm text-gray-600 pb-1 block"
              for="email"
            >
              E-mail
            </label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <ul className="list-disc ml-4 text-sm text-gray-500">
              {errorSignup && <li class="text-red-500">{errorSignup}</li>}
            </ul>
            <span className="text-sm italic text-gray-500 mt-5">
              * You will recieve a message on your email to reset your password.
            </span>
          </div>
          <div class="mt-5">
            <button
              class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Retrive Password
            </button>
          </div>
          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link to="/login">
              <a
                class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                href="#"
              >
                login
              </a>
            </Link>

            <span class="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
