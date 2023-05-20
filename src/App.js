import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main style={{ minHeight: "70vh" }}>
        <Home></Home>
        <Routes>
          <Route path="/" element={Home}></Route>
          <Route path="/cart" element={Cart}></Route>
          <Route path="/shop" element={Products}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
