import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
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
            Signup
          </h1>
          <form action="">
            <div className="relative my-4">
              <input
                type="text"
                className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-2 left-0 origin-[0] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Name
              </label>
              <BiUser className="absolute top-2 right-4" />
            </div>
            <div className="relative my-4">
              <input
                type="email"
                className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-2 left-0 -z-10 origin-[0] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Email
              </label>
              <TfiEmail className="absolute top-2 right-4" />
            </div>
            <div className="relative my-4">
              <input
                type="password"
                className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-2 left-0 -z-10 origin-[0] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Password
              </label>
              <AiOutlineUnlock className="absolute top-2 right-4" />
            </div>

            <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-gray-200 py-2 transition-colors duration-300"
              type="submit"
            >
              Signup
            </button>
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
