import { useState, lazy, Suspense } from "react"; // Import lazy and Suspense
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Spinner from "./components/Spinner";

// Use lazy to import the components lazily
const Home = lazy(() => import("./pages/Home"));
const Plan = lazy(() => import("./pages/Plan"));

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className="grid-container">
        <Router>
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
          <Routes>
            {/* Wrap your Route components with Suspense */}
            <Route
              path="/"
              element={(
                <Suspense fallback={<Spinner/>}>
                  <Home />
                </Suspense>
              )}
            />
            <Route
              path="plan/personal"
              element={(
                <Suspense fallback={<Spinner/>}>
                  <Plan />
                </Suspense>
              )}
            />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
