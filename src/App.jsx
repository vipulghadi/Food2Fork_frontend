import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import AboutProject from "./pages/AboutProject";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./store/AppStore";

function App() {
  return (
    <>
    <Provider>
      <div className="w-full relative">
        <BrowserRouter>
          <Navbar />
          <Routes>
           
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<AboutProject />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </BrowserRouter>
      </div>
      </Provider>
    </>
  );
}

export default App;
