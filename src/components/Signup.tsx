import { Login } from "../icons/Login";

const Signup = () => {
  return (
    <div className="flex h-screen">
      {/* left side of screen  */}
      <div className="flex flex-col justify-center items-start w-1/2 bg-white p-[100px]">
        <h1 className="font-bold text-5xl mb-6">Welcome Back</h1>
        <p className="mb-4 font-semibold ">Signup in to your account.</p>

        <h3 className="font-bold text-xl mb-4">Enter UserName</h3>
        <input
          className="cursor-pointer border rounded-md border-black p-2 w-80 mb-2"
          type="text"
          placeholder="john22"
        />
        <h3 className="font-bold text-xl mb-4">Enter Password</h3>
        <input
          className="cursor-pointer border rounded-md border-black p-2 w-80 mb-2"
          type="password"
          placeholder="*******"
        />
        <h3 className="font-bold text-xl mb-4">Enter Email</h3>
        <input
          className="cursor-pointer border rounded-md border-black p-2 w-80 mb-2"
          type="email"
          placeholder="john@gmail.com"
        />
        <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md w-80 mt-4">
          Sign Up
        </button>
        <p className="mt-4 text-center items-center flex justify-center">
          Already have an account? <a href="#" className="underline">Login</a>
        </p>
      </div>
      {/* Right side of screen */}
      <div className="flex items-center justify-center w-1/2 bg-gray-950 bg-cover bg-no-repeat bg-bottom ">
        <Login />
      </div>
    </div>
  );
};

export default Signup;
