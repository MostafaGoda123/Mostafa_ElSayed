import Navbar from "./components/1-Navbar";
import Home from "./components/2-Home";
import Education from "./components/3-Education";
import Projects from "./components/4-Projects";
import GetInTouch from "./components/5-GetInTouch";
import Footer from "./components/Footer";
import Line from "./components/Line";

function App() {
  return (
    <div className="App mainColor">
      <Navbar />
      <Home />
      <Line />
      <Education />
      <Line />
      <Projects />
      <Line />
      <GetInTouch />
      <Line />
      <Footer />
      </div>
  );
}

export default App;
