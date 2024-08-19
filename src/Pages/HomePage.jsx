import Hero from "../components/Hero";
import Movies from "../components/Movies";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Movies isHome={true} />
    </div>
  );
};

export default HomePage;
