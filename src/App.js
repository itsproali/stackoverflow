import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SideNav from "./components/SideNav/SideNav";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="block md:flex min-h-screen relative border-b">
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full container mx-auto">
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Routes>
            <Route path="/" element={<Home isOpen={isOpen} />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
