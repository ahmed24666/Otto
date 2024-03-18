import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { SignupApi } from "../services/apis";
const Login = ({ signup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [errorSignup, seterrorSignup] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signup) {
      if (
        /^.{8,}$/.test(password) &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
      ) {
        var formData = new FormData();
        formData.append("email", email);
        formData.append("name", name);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("phone", phone);

        fetch("https://siedra-shop.com/api/auth/register", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.warn(data);
            if (data.status === false) {
              console.log(data.errors);
              seterrorSignup(data.errors);
            } else {
              seterrorSignup(null);
              navigate("/email-verification");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        return;
      }
    } else {
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
            {signup && (
              <>
                <label
                  class="font-semibold text-sm text-gray-600 pb-1 block"
                  for="username"
                >
                  Username
                </label>
                <input
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  type="text"
                  id="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label
                  class="font-semibold text-sm text-gray-600 pb-1 block"
                  for="Name"
                >
                  Name
                </label>
                <input
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  type="text"
                  required
                  id="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  class="font-semibold text-sm text-gray-600 pb-1 block"
                  for="phone"
                >
                  Phone
                </label>
                <input
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  type="text"
                  required
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </>
            )}
            <label
              class="font-semibold text-sm text-gray-600 pb-1 block"
              for="password"
            >
              Password
            </label>
            <input
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              required
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ul className="list-disc ml-4 text-sm text-gray-500">
              {signup &&
                password.length > 0 &&
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
              {errorSignup &&
                errorSignup.map((item) => {
                  return (
                    <li className="text-red-500">
                      {item === "This username is already taken."
                        ? "This username is already taken."
                        : "This email is already taken."}
                    </li>
                  );
                })}
            </ul>
          </div>
          {signup && (
            <div class="text-right mb-4">
              <a
                class="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          )}
          {/* <div class="flex justify-center w-full items-center">
            <div>
              <button class="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-red-500 focus:ring-offset-red-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                <svg
                  viewBox="0 0 24 24"
                  height="25"
                  width="25"
                  y="0px"
                  x="0px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707 C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321 C6.4099731,6.9193726,8.977478,5,12,5z"
                    fill="#F44336"
                  ></path>
                  <path
                    d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12 c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458 l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z"
                    fill="#2196F3"
                  ></path>
                  <path
                    d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511 C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215 C5.1484375,13.6044312,5,12.8204346,5,12z"
                    fill="#FFC107"
                  ></path>
                  <path
                    d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959 C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834 C14.7412109,18.5588989,13.4284058,19,12,19z"
                    fill="#00B060"
                  ></path>
                  <path
                    opacity=".1"
                    d="M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24 c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z"
                  ></path>
                  <polygon
                    opacity=".1"
                    points="12,14.25 12,14.5 18.4862061,14.5 18.587492,14.25"
                  ></polygon>
                  <path
                    d="M23.9944458,12.1470337C23.9952393,12.0977783,24,12.0493774,24,12 c0-0.0139771-0.0021973-0.0274658-0.0022583-0.0414429C23.9970703,12.0215454,23.9938965,12.0838013,23.9944458,12.1470337z"
                    fill="#E6E6E6"
                  ></path>
                  <path
                    opacity=".2"
                    d="M12,9.5v0.25h11.7855721c-0.0157471-0.0825195-0.0329475-0.1680908-0.0503426-0.25H12z"
                    fill="#FFF"
                  ></path>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="12"
                    y1="12"
                    x2="24"
                    x1="0"
                    id="LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1"
                  >
                    <stop stop-opacity=".2" stop-color="#fff" offset="0"></stop>
                    <stop stop-opacity="0" stop-color="#fff" offset="1"></stop>
                  </linearGradient>
                  <path
                    d="M23.7352295,9.5H12v5h6.4862061C17.4775391,17.121582,14.9771729,19,12,19 c-3.8659668,0-7-3.1340332-7-7c0-3.8660278,3.1340332-7,7-7c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686 c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374l3.637146-3.4699707L19.8414307,2.940979 C17.7369385,1.1170654,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12c0,6.6273804,5.3725586,12,12,12 c6.1176758,0,11.1554565-4.5812378,11.8960571-10.4981689C23.9585571,13.0101929,24,12.508667,24,12 C24,11.1421509,23.906311,10.3068237,23.7352295,9.5z"
                    fill="url(#LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1)"
                  ></path>
                  <path
                    opacity=".1"
                    d="M15.7885132,5.890686C14.6939087,5.1806641,13.4018555,4.75,12,4.75c-3.8659668,0-7,3.1339722-7,7 c0,0.0421753,0.0005674,0.0751343,0.0012999,0.1171875C5.0687437,8.0595093,8.1762085,5,12,5 c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374 l3.637146-3.4699707l-3.637146,3.2199707C16.1289062,6.1018066,15.9560547,5.9995728,15.7885132,5.890686z"
                  ></path>
                  <path
                    opacity=".2"
                    d="M12,0.25c2.9750366,0,5.6829224,1.0983887,7.7792969,2.8916016l0.144165-0.1375122 l-0.110014-0.0958166C17.7089558,1.0843592,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12 c0,0.0421753,0.0058594,0.0828857,0.0062866,0.125C0.0740356,5.5558472,5.4147339,0.25,12,0.25z"
                    fill="#FFF"
                  ></path>
                </svg>
                <span class="ml-2">Sign in with Google</span>
              </button>
              <button class="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-red-500 focus:ring-offset-red-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4">
                <svg
                  viewBox="0 0 30 30"
                  height="30"
                  width="30"
                  y="0px"
                  x="0px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                </svg>
                <span class="ml-2">Sign in with Apple</span>
              </button>
            </div>
          </div> */}
          <div class="mt-5">
            {signup ? (
              <button
                class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Signup
              </button>
            ) : (
              <button
                class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Login
              </button>
            )}
          </div>
          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            {signup ? (
              <Link to="/login">
                <a
                  class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                  href="#"
                >
                  or login
                </a>
              </Link>
            ) : (
              <Link to="/signup">
                <a
                  class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                  href="#"
                >
                  or signup
                </a>
              </Link>
            )}
            <span class="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
