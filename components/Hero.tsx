import HeroReveal from "./HeroReveal";

export default function Hero() {
  return (
    <HeroReveal>

    <section id="home" className="relative h-[90vh] flex items-center justify-center text-center px-6">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl">

        <h1 className="text-5xl md:text-6xl font-bold text-[#D4AF37]">
          Golden Falcon Energy
        </h1>

        <p className="text-xl md:text-2xl mt-6 text-gray-200">
          Global Trading & Service Provider
        </p >

        <p className="mt-4 text-gray-300">
          Energy • Mining • Petrochemical
        </p >

      </div>

    </section>
    </HeroReveal>
  );
}