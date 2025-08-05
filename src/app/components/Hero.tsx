const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="backgrounds/stripe_bottom_background.jpeg"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>

      <div className="relative flex flex-col h-screen items-center justify-start pt-32">
        <div>
          <img
            src="/nwt_logo_kittl.svg"
            alt="Logo"
            className="w-[40vw] h-auto neon-realistic"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;