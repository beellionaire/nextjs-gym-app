import HeroSlider from "./HeroSlider"

const Hero = () => {
  return (
    <section className="h-[80vh] lg:h-[912px] bg-hero bg-center bg-cover bg-no-repeat" id="home">
      <div className="container mx-auto h-full">
        
        {/* Slider */}
        <HeroSlider />

      </div>
    </section>
  )
}

export default Hero