const NavBar = () => {
  return (
    <div className="top-0 m-0 z-10 w-full fixed bg-transparent shadow-md">
      <nav className="max-w-[1600px] bg-transparent px-10 py-4 flex items-center justify-between text-white">
        <a href="#" className="text-xl font-bold">
          <span className="text-indigo-600">Enter-</span>Stream
        </a>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search Movies"
          className="px-4 py-2 rounded-lg border bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-1/3 text-white"
        />

    
        <div className="space-x-4 flex items-center relative">
          <div className="relative group">
            <a href="#" className="hover:text-indigo-600">Free Movies</a>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg py-2 mt-2 rounded-lg w-48">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Action</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Comedy</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Horror</a>
            </div>
          </div>

          <div className="relative group">
            <a href="#" className="hover:text-indigo-600">Live TV</a>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg py-2 mt-2 rounded-lg w-48">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">News</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Sports</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Entertainment</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
