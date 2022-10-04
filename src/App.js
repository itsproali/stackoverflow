import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SideNav from "./components/SideNav/SideNav";
import { useState } from "react";
import GoTop from "./components/GoTop/GoTop";
import Loading from "./components/Loading/Loading";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="block md:flex min-h-screen relative border-b">
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full container mx-auto">
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setSearchValue={setSearchValue} />
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/loading" element={<Loading/>} />
          </Routes>
          <GoTop/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
