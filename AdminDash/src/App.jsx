import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Plan from "./pages/Plan";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
      <div className="grid-container">
      <Router>
      
        <Header OpenSidebar={OpenSidebar} />
        
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        {/* <Home /> */}
        </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
