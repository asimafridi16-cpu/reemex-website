import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import WhyReemzar from "./components/WhyReemzar/WhyReemzar";
import Benefits from "./components/Benefits/Benefits";
import Specifications from "./components/Specifications/Specifications";
import Lifestyle from "./components/Lifestyle/Lifestyle";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FAQ from "./components/FAQ/FAQ";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyReemzar />
        <Benefits />
        <Specifications />
        <Lifestyle />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
