import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Testimonial from "./components/Testimonial/Testimonial";
import Working from "./components/working/Working";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Working />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
