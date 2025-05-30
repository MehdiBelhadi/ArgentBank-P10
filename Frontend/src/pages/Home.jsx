import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Features from "../containers/Features/Features";
import Menu from "../containers/Menu/Menu";

function Home() {
  return (
    <>
      <Menu />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default Home;
