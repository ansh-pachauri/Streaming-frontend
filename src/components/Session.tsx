import studyLogo from "../assets/study.svg";
export const Session = () => {
  return (
    <div className="flex h-screen ">
      {/* left side of screen  */}
      <div className="flex flex-col justify-center items-start w-1/2 bg-white p-[100px] pt-0">
        <h1 className="font-bold text-5xl mb-6">Start Session</h1>

        <h3 className="font-semibold text-xl mt-4">Title</h3>
        <input
          className="cursor-pointer border rounded-md border-black p-2 w-80 mb-2"
          type="text"
          placeholder="Math's Class"
        />
        <h3 className="font-semibold text-xl mt-4">Status</h3>
        <div className="flex items-center mb-2">
          <input
            className="cursor-pointer w-5 h-5 text-black border-2 border-gray-400 rounded-full"
            type="radio"
            name="status"
            id="active"
            value="active"
          />
          <label htmlFor="active" className="ml-2 cursor-pointer font-bold text-gray-700">Active</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            className="cursor-pointer w-5 h-5 text-black border-2 border-gray-400 rounded-full "
            type="radio"
            name="status"
            id="inactive"
            value="inactive"
          />
          <label htmlFor="inactive" className="ml-2 cursor-pointer font-bold text-gray-700">Inactive</label>
        </div>

        <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md w-80 mt-4">
          Start Session
        </button>
        
      </div>
      {/* Right side of screen */}
      <div className="flex items-start justify-start relative overflow-hidden  bg-cover bg-no-repeat w-1/2 bg-right-top ">
        <img src={studyLogo} alt=""  className="w-[700px] h-[700px]"/>
      </div>
    </div>
  );
};