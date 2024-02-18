import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <>
      <div className=" p-1 mx-auto w-1/2 ml-20">
        <div className="flex relative items-center">
          <IoMdSearch className="justify-center left-3 absolute" />
          <input
            className="rounded-md border border-slate-500 py-1 w-full px-8"
            placeholder="Search..."
            type="search"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
