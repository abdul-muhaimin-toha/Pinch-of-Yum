import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <OurRecipes></OurRecipes>
      <Footer></Footer>
    </>
  );
}

export default App;
