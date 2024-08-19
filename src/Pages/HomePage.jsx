import Hero from "../components/Hero";
import Movies from "../components/Movies";
import Series from "../components/Series";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Movies isHome={true} />
      <Series isHome={true} />
    </div>
  );
};

export default HomePage;
