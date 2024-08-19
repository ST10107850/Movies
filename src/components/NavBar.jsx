import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="top-0 m-0 z-10 w-full absolute bg-transparent shadow-md">
      <nav className="max-w-[1600px] bg-transparent px-10 py-4 flex items-center justify-between text-white">
        <NavLink to="/" className="text-xl font-bold">
          <span className="text-indigo-600">Enter-</span>Stream
        </NavLink>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search Movies"
          className="px-4 py-2 rounded-lg border bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-1/3 text-white"
        />

    
        <div className="space-x-4 flex items-center relative ">
          <div className="relative group">
            <NavLink to="/movies" className="hover:text-indigo-600 uppercase">Movies</NavLink>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg py-2 mt-2 rounded-lg w-48">
              <NavLink to="#" className="block px-4 py-2 hover:bg-gray-200">Action</NavLink>
              <a to="#" className="block px-4 py-2 hover:bg-gray-200">Comedy</a>
              <a to="#" className="block px-4 py-2 hover:bg-gray-200">Horror</a>
            </div>
          </div>

          <div className="relative group">
            <NavLink to="#" className="hover:text-indigo-600 uppercase">Series</NavLink>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg py-2 mt-2 rounded-lg w-48">
              <a to="#" className="block px-4 py-2 hover:bg-gray-200">Action</a>
              <a to="#" className="block px-4 py-2 hover:bg-gray-200">Comedy</a>
              <a to="#" className="block px-4 py-2 hover:bg-gray-200">Horror</a>
            </div>
          </div>

          <div className="relative group">
            <NavLink to="#" className="hover:text-indigo-600 uppercase">Live TV</NavLink>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg py-2 mt-2 rounded-lg w-48">
              <a to="#" className="block px-4 py-2 hover:bg-gray-200">News</a>
              <a to="#" className="block px-4 py-2 hover:bg-gray-200">Sports</a>
              <a to="#" className="block px-4 py-2 hover:bg-gray-200">Entertainment</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
