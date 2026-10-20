import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}

export default App;