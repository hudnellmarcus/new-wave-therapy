import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/backgrounds/stripe_bottom_background.jpeg"
          fill
          className="object-cover"
          alt="Background"
          priority
        />
      </div>

      <div className="relative flex flex-col h-screen items-center justify-start pt-32">
        <div>
          <Image
            src="/nwt_logo_kittl.svg"
            alt="New Wave Therapy Logo"
            width={800}
            height={400}
            className="w-[40vw] h-auto neon-realistic"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;