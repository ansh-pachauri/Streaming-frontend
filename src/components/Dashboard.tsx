import { Link } from "react-router-dom";
import Logo from "../icons/Logo";
import { Chat } from "./Chat";

export const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex  gap-3 p-6">
          <Logo />
          <h1 className="text-3xl font-bold  mt-5 text-gray-800">Study Adda</h1>
        </div>
        <button className="bg-gray-800 text-white px-6 py-4 rounded-md mr-7 whitespace-nowrap">
          <Link to="/signup">End Session</Link>
        </button>
      </div>
      {/* Slides component here */}
      <div className="flex flex-row  gap-2">
      <div className="mt-2 w-[120vh] h-[500px] border rounded-md ml-4 bg-slate-300 flex justify-center align-middle">
        slides
      </div>
      <div className="mt-2 w-[65vh] h-auto border rounded-md ml-4  flex justify-center align-middle">
        <Chat />
      </div>
      </div>
    </div>
  );
};
