import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Porto from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Porto />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
