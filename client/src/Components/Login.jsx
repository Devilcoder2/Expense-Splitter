import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineUnlock } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        formData
      );

      if (response.data.msg === "User Login Successfull") {
        localStorage.setItem("token", response.token);
        navigate("/groups");
      }
    } catch (error) {
      console.error("There was an error creating the account!", error);
    }
  };
  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover"
      style={{
        backgroundImage:
          "url(https://4kwallpapers.com/images/walls/thumbs_2t/144.png)",
      }}
    >
      <div>
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
          <h1 className="text-4xl text-whitefont-bold text-center mb-6">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="relative my-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor=""
                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-2 left-0 origin-[0] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Email
              </label>
              <TfiEmail className="absolute top-2 right-4" />
            </div>
            <div className="relative my-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor=""
                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-2 left-0 -z-10 origin-[0] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Password
              </label>
              <AiOutlineUnlock className="absolute top-2 right-4" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="Remember Me">Remember Me</label>
              </div>
              <Link to="" className="text-blue-500">
                Forgot Password?
              </Link>
            </div>
            <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-gray-200 py-2 transition-colors duration-300"
              type="submit"
            >
              Login
            </button>
            <div>
              <span className="m-4">
                New Here?{" "}
                <Link className="text-blue-500" to="/signup">
                  Create an Account
                </Link>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
