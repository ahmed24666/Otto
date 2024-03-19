import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = React.useState("");
  const [errorSignup, seterrorSignup] = useState(null);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [success, setsuccess] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^.{8,}$/.test(password) &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
    ) {
      var formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("resetPasswordCode", code);

      fetch("https://siedra-shop.com/api/auth/resetPassword", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === false) {
            console.log(data);
            setsuccess(null);
            seterrorSignup("Invalid code or email. Please try again.");
          } else {
            seterrorSignup(null);
            setsuccess("Password reset successfully.");
            setTimeout(() => {
              navigate("/login");
            }, 1500);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
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
              for="vareficationCode"
            >
              Reset Password Code
            </label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
              type="text"
              id="vareficationCode"
              required
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div class="mt-5">
            <label
              class="font-semibold text-sm text-gray-600 pb-1 block"
              for="email"
            >
              E-mail
            </label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mt-5">
            <label
              class="font-semibold text-sm text-gray-600 pb-1 block"
              for="password"
            >
              Password
            </label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
              type="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <ul className="list-disc ml-4 mt-5 text-sm text-gray-500">
              {password.length > 0 &&
                !(
                  /^.{8,}$/.test(password) &&
                  /[A-Z]/.test(password) &&
                  /[a-z]/.test(password) &&
                  /\d/.test(password) &&
                  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
                ) && (
                  <>
                    <li
                      className={`${
                        /^.{8,}$/.test(password) ? "" : "text-red-500"
                      }`}
                    >
                      Password must be at least 8 characters long
                    </li>
                    <li
                      className={`${
                        /[A-Z]/.test(password) ? "" : "text-red-500"
                      }`}
                    >
                      One uppercase letter
                    </li>
                    <li
                      className={`${
                        /[a-z]/.test(password) ? "" : "text-red-500"
                      }`}
                    >
                      One lowercase letter
                    </li>
                    <li
                      className={`${/\d/.test(password) ? "" : "text-red-500"}`}
                    >
                      One number
                    </li>
                    <li
                      className={`${
                        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
                          ? ""
                          : "text-red-500"
                      }`}
                    >
                      One special character (e.g., !, @, #, $, etc.)
                    </li>
                  </>
                )}
            </ul>
            <ul className="list-disc ml-4 text-sm text-gray-500">
              {errorSignup && <li class="text-red-500">{errorSignup}</li>}
              {success && <li class="text-green-500">{success}</li>}
            </ul>
          </div>
          <div class="mt-5">
            <button
              class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Reset Password
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

export default ResetPassword;
