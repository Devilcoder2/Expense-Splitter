//React icons imports 
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";

//react imports 
import { useState } from "react";

//other imports
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  //to store the details entered by user 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //to handle input changes 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //when signup form gets submitted 
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent page from reloading 
    try {
      const response = await axios.post(
        "http://localhost:3000/user/register",
        formData
      );
      if (response.data.msg === "Account created successfully") {
        navigate("/login");
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
          {/* HEADING  */}
          <h1 className="text-4xl text-white font-bold text-center mb-6">
            Signup
          </h1>

          <form onSubmit={handleSubmit}>
            {/* USER NAME  */}
            <div className="relative my-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-2 left-0 origin-[0] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Name
              </label>
              <BiUser className="absolute top-2 right-4" />
            </div>

            {/* USER EMAIL  */}
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
                htmlFor="email"
                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-2 left-0 -z-10 origin-[0] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Email
              </label>
              <TfiEmail className="absolute top-2 right-4" />
            </div>
            
            {/* PASSWORD  */}
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
                htmlFor="password"
                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-2 left-0 -z-10 origin-[0] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Password
              </label>
              <AiOutlineUnlock className="absolute top-2 right-4" />
            </div>

            {/* SIGNUP BUTTON  */}
            <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-gray-200 py-2 transition-colors duration-300"
              type="submit"
            >
              Signup
            </button>

            {/* SWITCH TO LOGIN PAGE  */}
            <div>
              <span className="m-4">
                Already have an Account?{" "}
                <Link className="text-blue-500" to="/login">
                  Login
                </Link>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
