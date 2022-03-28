// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components";
/*import Top from "./components/Top";
import Home from "./pages/Home"; */
const App = () => {
  return (
    <Router>
      {/* <Sidebar />
      <Top /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
