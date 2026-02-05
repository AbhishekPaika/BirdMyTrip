import { useEffect, useState } from "react";
import api from "../api";
import Hero from "../components/Hero";
import About from "../components/About";
import Offers from "../components/Offers";
import Contact from "../components/Contact";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/content").then((res) => setData(res.data));
  }, []);

  if (!data) return <div className="p-10">Loading...</div>;

  return (
    <div>
      <Hero hero={data.hero} />
      <About about={data.about} />
      <Offers offers={data.offers} />
      <Contact />
    </div>
  );
};

export default Home;