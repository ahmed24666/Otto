import React, { useEffect, useState } from "react";
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
        seterrorSignup(null);
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
              console.warn("dfgfgdfgd");
              seterrorSignup(null);
              navigate("/email-verification");
            }
          });
      } else {
        return;
      }
    } else {
      var formData = new FormData();
      formData.append("user_identifier", email);
      formData.append("password", password);

      fetch("https://siedra-shop.com/api/auth/login", {
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
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("user", JSON.stringify(data.data.user));
            navigate("/");
          }
        });
    }
  };
  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
    setName("");
    setPhone("");
    seterrorSignup(null);
  }, [window.location.pathname]);

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
              value={email}
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
                  value={username}
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
                  value={name}
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
                  value={phone}
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
              value={password}
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
                signup &&
                errorSignup.map((item) => {
                  return <li className="text-red-500">{item}</li>;
                })}
              {errorSignup?.message && !signup && (
                <li className="text-red-500">{errorSignup.message}</li>
              )}
            </ul>
          </div>
          {!signup && (
            <div class="text-right mb-4">
              <Link to="/forget-password">
                <a
                  class="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                  href="#"
                >
                  Forgot Password?
                </a>
              </Link>
            </div>
          )}

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
