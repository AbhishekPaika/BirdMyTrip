const About = ({ about }) => {
  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold">{about.title}</h2>
      <p className="mt-4 max-w-2xl mx-auto">{about.description}</p>
    </section>
  );
};

export default About;