import { useEffect, useState } from "react";

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    // Fixed arrow function syntax
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b3c8574ec4e0950c0501b1bf409be1e0"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .catch((error) => console.error("Error fetching movies:", error)); // Add error handling
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="flex justify-center mt-20 flex-col px-10">
      <h1 className="uppercase text-3xl font-bold mb-10 text-center">
        Latest Movies
      </h1>

      {/* Movie Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {movieList.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-[250px] h-[300px] object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* "More" Button */}
      <div className="flex justify-end mt-10 mr-52">
        <a
          href="#"
          className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 "
        >
          More
        </a>
      </div>
    </div>
  );
};

export default Home;
