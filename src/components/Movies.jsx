import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Movies = ({ isHome = false }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (page = 1) => {
    const apiKey = "b3c8574ec4e0950c0501b1bf409be1e0"; // Replace with your API key
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;
    
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log("Fetched data: ", data);

      const filteredMovies = data.results
        .filter(
          (movie) =>
            movie.release_date && movie.release_date.startsWith("2024")
        )
        .sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

      setMovies(isHome ? filteredMovies.slice(0, 8) : filteredMovies);
      setTotalPages(data.total_pages);
      setCurrentPage(page);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage, isHome]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex justify-center mt-20 flex-col px-10">
      {isHome ? (
        <h1 className="uppercase text-3xl font-bold mb-10 text-center">
          Latest Movies
        </h1>
      ) : (
        <h1 className="uppercase text-3xl font-bold mb-10 text-center">
          List Of All Movies
        </h1>
      )}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {movies.map((movie) => (
            <div key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-[250px] h-[300px] object-cover shadow-lg"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {!isHome && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-4 text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
      {isHome && (
        <div className="flex justify-end mt-10 mr-52">
          <Link
            to="/movies"
            className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600"
          >
            More
          </Link>
        </div>
      )}
    </div>
  );
};

Movies.propTypes = {
  isHome: PropTypes.bool, // Use PropTypes.bool for boolean props
};

export default Movies;
