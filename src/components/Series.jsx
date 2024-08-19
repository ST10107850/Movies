import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Series = ({ isHome = false }) => {
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchSeries = async (page = 1) => {
    const apiKey = "b3c8574ec4e0950c0501b1bf409be1e0"; // Replace with your TMDb API key
    const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${page}`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log("Fetched data: ", data);

      const filteredSeries = data.results
        .filter(
          (show) =>
            show.first_air_date && show.first_air_date.startsWith("2024")
        )
        .sort((a, b) => new Date(b.first_air_date) - new Date(a.first_air_date));

      setSeries(isHome ? filteredSeries.slice(0, 8) : filteredSeries);
      setTotalPages(data.total_pages);
      setCurrentPage(page);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchSeries(currentPage);
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
          Latest Series
        </h1>
      ) : (
        <h1 className="uppercase text-3xl font-bold mb-10 text-center">
          List Of All Series
        </h1>
      )}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {series.map((show) => (
            <div key={show.id}>
              <Link to={`/series/${show.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.name}
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
            to="/series"
            className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600"
          >
            More
          </Link>
        </div>
      )}
    </div>
  );
};

Series.propTypes = {
  isHome: PropTypes.bool, // Use PropTypes.bool for boolean props
};

export default Series;
