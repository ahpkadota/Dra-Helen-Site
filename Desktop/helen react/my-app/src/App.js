import "./App.css";
import "./bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
