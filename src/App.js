import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Comonents/Home";
import About from "./Comonents/About";
import Info from "./Comonents/Info";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info/:id" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
