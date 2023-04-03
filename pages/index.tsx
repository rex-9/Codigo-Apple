import type { NextPage } from "next";

// components
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import QA from "../components/QA";
import StickyNav from "../components/StickyNav";
import TV from "../components/TV";

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <StickyNav />
      <Hero />
      <Gallery />
      <TV />
      <QA />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
