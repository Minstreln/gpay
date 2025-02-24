import BrandSection from "./components/BrandSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SocialSection from "./components/SocialSection";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-white to-[#f8fbff]">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 sm:px-14">
          <HeroSection />
          <BrandSection />
          <Features />
          <Testimonial />
        </div>
        <SocialSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
