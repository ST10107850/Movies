import background from "../assets/images/background.png";
const Hero = () => {
  return (
    <div
      className="relative h-[120px] w-full bg-cover bg-center bg-no-repeat md:h-[210px] sm:h-[170px] lg:h-[400px] flex justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
    </div>
  )
}

export default Hero