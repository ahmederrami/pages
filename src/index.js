

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
//import Home from "./pages/Home";
import About from "./pages/About";
import Organigramme from "./pages/Organigramme";
import Contact from "./pages/Contact";
//import NoPage from "./pages/NoPage";
import './App.css';
import Slider from "./pages/Slider";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Slider />} />
          <Route path="about" element={<About />} />
          <Route path="organigramme" element={<Organigramme />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Slider />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);