import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Email from "./components/Email";
import Facebook from "./components/Facebook";
import Post from "./components/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Topbar />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/email" element={<Email />}></Route>
          <Route path="/facebook" element={<Facebook />}></Route>
          <Route path="/post" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
