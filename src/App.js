import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Meet from "./pages/Meet";
import Todo from "./pages/Todo";


function App() {
  return <>
  
 
  <BrowserRouter >
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meet" element={<Meet />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/signin" element={<Login />} />

    </Routes>
    <Footer />
  </BrowserRouter>
 

  </>
}

export default App;
