import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showMoviesMenu, setShowMoviesMenu] = useState(false);
  const [showSeriesMenu, setShowSeriesMenu] = useState(false);
  const [showLiveTvMenu, setShowLiveTvMenu] = useState(false);

  const toggleMenu = (menu) => {
    if (menu === "movies") {
      setShowMoviesMenu(!showMoviesMenu);
      setShowSeriesMenu(false);
      setShowLiveTvMenu(false);
    } else if (menu === "series") {
      setShowSeriesMenu(!showSeriesMenu);
      setShowMoviesMenu(false);
      setShowLiveTvMenu(false);
    } else if (menu === "liveTv") {
      setShowLiveTvMenu(!showLiveTvMenu);
      setShowMoviesMenu(false);
      setShowSeriesMenu(false);
    }
  };

  return (
    <div className="top-0 m-0 z-10 w-full fixed bg-transparent shadow-md">
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

        <div className="space-x-4 flex items-center">
          {/* Movies Dropdown */}
          <div className="relative">
            <NavLink
              to="/movies"
              className="hover:text-indigo-600 uppercase"
              onClick={() => toggleMenu("movies")}
            >
              Movies
            </NavLink>
            {/* {showMoviesMenu && (
              <div className="absolute bg-white text-black shadow-lg py-2 mt-2 rounded-lg w-48">
                <NavLink to="/movies/action" className="block px-4 py-2 hover:bg-gray-200">Action</NavLink>
                <NavLink to="/movies/comedy" className="block px-4 py-2 hover:bg-gray-200">Comedy</NavLink>
                <NavLink to="/movies/horror" className="block px-4 py-2 hover:bg-gray-200">Horror</NavLink>
              </div>
            )} */}
          </div>

          {/* Series Dropdown */}
          <div className="relative">
            <NavLink
              to="/series"
              className="hover:text-indigo-600 uppercase"
              onClick={() => toggleMenu("series")}
            >
              Series
            </NavLink>
            {/* {showSeriesMenu && (
              <div className="absolute bg-white text-black shadow-lg py-2 mt-2 rounded-lg w-48">
                <NavLink to="/series/action" className="block px-4 py-2 hover:bg-gray-200">Action</NavLink>
                <NavLink to="/series/comedy" className="block px-4 py-2 hover:bg-gray-200">Comedy</NavLink>
                <NavLink to="/series/horror" className="block px-4 py-2 hover:bg-gray-200">Horror</NavLink>
              </div>
            )} */}
          </div>

          {/* Live TV Dropdown */}
          <div className="relative">
            <NavLink
              to="/live-tv"
              className="hover:text-indigo-600 uppercase"
              onClick={() => toggleMenu("liveTv")}
            >
              Live TV
            </NavLink>
            {/* {showLiveTvMenu && (
              <div className="absolute bg-white text-black shadow-lg py-2 mt-2 rounded-lg w-48">
                <NavLink to="/live-tv/news" className="block px-4 py-2 hover:bg-gray-200">News</NavLink>
                <NavLink to="/live-tv/sports" className="block px-4 py-2 hover:bg-gray-200">Sports</NavLink>
                <NavLink to="/live-tv/entertainment" className="block px-4 py-2 hover:bg-gray-200">Entertainment</NavLink>
              </div>
            )} */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
