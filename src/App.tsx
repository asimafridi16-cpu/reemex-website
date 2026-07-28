import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Story from "./components/Story/Story";
import WhyReemzar from "./components/WhyReemzar/WhyReemzar";
import Benefits from "./components/Benefits/Benefits";
import InteractiveProduct from "./components/InteractiveProduct/InteractiveProduct";
import Comparison from "./components/Comparison/Comparison";
import Specifications from "./components/Specifications/Specifications";
import Lifestyle from "./components/Lifestyle/Lifestyle";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonials from "./components/Testimonials/Testimonials";
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
        <Story />
        <WhyReemzar />
        <Benefits />
        <InteractiveProduct />
        <Comparison />
        <Specifications />
        <Lifestyle />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
