

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
//import Home from "./pages/Home";
import About from "./About/About";
import Reference from "./Reference/Reference";
import Organigramme from "./pages/Organigramme";
import Omra from "./pages/Omra";
import Contact from "./Contact/Contact";
//import NoPage from "./pages/NoPage";

import Slider from "./pages/Slider";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Slider />} />
          <Route path="about" element={<About />} />
          <Route path="references" element={<Reference />} />
          <Route path="organigramme" element={<Organigramme />} />
          <Route path="omra" element={<Omra />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Slider />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);