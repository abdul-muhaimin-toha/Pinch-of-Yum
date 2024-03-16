import { ToastContainer } from "react-toastify";
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
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
}

export default App;
