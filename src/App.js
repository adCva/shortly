import './Reset.css';
import "./Scss/style.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Boost from "./Components/Boost";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <Features />
        <Boost />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
