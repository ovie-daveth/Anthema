import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
  return <>
  
 
  <BrowserRouter >
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />

    </Routes>
    <Footer />
  </BrowserRouter>
 

  </>
}

export default App;
