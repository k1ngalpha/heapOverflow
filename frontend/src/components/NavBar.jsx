import SearchBar from "./SearchBar";
const NavBar = () => {
  return (
    <div className="border border-slate-500 p-1">
      <div className=" flex justify-start items-center relative">
        <img
          className="block h-7 w-7"
          src="../../assets/images/icon.png"
          alt="icon"
        />
        <span className="px-1 font-semibold text-xl">heap</span>
        <span className="font-bold text-xl">overflow</span>
        <button className="rounded-3xl hover:bg-slate-300 text-slate-600 p-2 ml-5">
          Products
        </button>
        <SearchBar />
        <div className=" gap-2 mr-20">
          <button className="p-2 border border-blue-600 px-2 rounded-lg gap-2 mx-10 text-blue-600">
            Login
          </button>

          <button className="p-2 py-2 rounded-lg border-blue-600 text-white bg-blue-400">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
