const Offers = ({ offers }) => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Offers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((offer, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">{offer.title}</h3>
            <p className="mt-2">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;