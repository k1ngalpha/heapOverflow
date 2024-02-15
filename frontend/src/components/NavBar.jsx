import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="bg-orange-500 border p-3">
      <div className="bg-red-600 flex justify-start items-center relative">
        <img
          className="block h-6 w-6"
          src="../../assets/images/icon.png"
          alt="icon"
        />
        <span className="px-1">heap</span>
        <span className="font-bold">overflow</span>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
