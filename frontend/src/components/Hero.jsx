const Hero = ({ hero }) => {
  return (
    <section
      className="h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="text-center bg-black/50 p-6 rounded">
        <h1 className="text-4xl font-bold">{hero.title}</h1>
        <p className="mt-4">{hero.subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;