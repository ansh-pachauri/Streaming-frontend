import { Link } from "react-router-dom";
import { Login } from "../icons/Login";
import Logo from "../icons/Logo";


const Signin = () => {
  return (
    <div className="flex h-screen">
        <div className="absolute flex justify-between top-0 left-0 m-4 cursor-pointer">
        <Logo />
        <h1 className="text-3xl font-bold  mt-5 ml-4 text-gray-800">Study Adda
        </h1>
      </div>
      {/* left side of screen  */}
      <div className="flex flex-col justify-center items-start w-1/2 bg-white p-[100px]">
        <h1 className="font-bold text-5xl mb-6">Welcome To Study Adda</h1>
        <p className="mb-4 font-semibold ">Signin in to your account.</p>

        <h3 className="font-semibold text-xl mt-4">UserName</h3>
        <input
          className="cursor-pointer border rounded-md border-black p-2 w-80 mb-2"
          type="text"
          placeholder="john22"
        />
        <h3 className="font-semibold text-xl mt-4">Password</h3>
        <input
          className="cursor-pointer border rounded-md border-black p-2 w-80 mb-2"
          type="password"
          placeholder="*******"
        />
        <h3 className="font-semibold text-xl mt-4">Email</h3>
        <input
          className="cursor-pointer border rounded-md border-black p-2 w-80 mb-2"
          type="email"
          placeholder="john@gmail.com"
        />
        <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md w-80 mt-4">
          Sign In
        </button>
        <p className="mt-4 text-center items-center flex justify-center">
          Already have an account? <Link to="/signup" className="underline">Signup</Link>
        </p>
        
      </div>
      {/* Right side of screen */}
      <div className="flex items-center justify-center w-1/2 bg-gray-950 bg-cover bg-no-repeat bg-bottom ">
        <Login />
      </div>
    </div>
  );
};

export default Signin;
