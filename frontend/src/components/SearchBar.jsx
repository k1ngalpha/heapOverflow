import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="bg-pink-500 mx-auto">
      <div className="flex relative items-center">
        <IoMdSearch className="justify-center" />
        <input
          className="rounded-md border py-1 px-3"
          placeholder="Search..."
          type="search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
