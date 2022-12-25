import Header from "./component/Header";
import "../src/App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<About></About>}></Route>
          <Route exact path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
