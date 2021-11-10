import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Twitch from "./components/Twitch/Twitch";
import Youtube from "./components/Youtube/Youtube";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Youtube />
      <Twitch />
      <Footer />
    </>
  );
}

export default App;
