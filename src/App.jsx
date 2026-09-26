import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
