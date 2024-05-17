import { ISearch } from "../types";
const Search = ({ onChange, value }: ISearch) => {
  return (
    <form className="flex items-center max-w-3xl mx-auto my-auto">
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
        <input
          type="text"
          value={value}
          id="search"
          onChange={onChange}
          className="bg-transparent border border-gray-500 text-gray-200 placeholder-gray-500 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Enter URL..."
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        ></button>
      </div>
    </form>
  );
};

export default Search;
