import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main style={{ minHeight: "70vh" }}></main>
      <Routes>
        <Route path="/" element={Products}></Route>
        <Route path="/cart" element={Cart}></Route>
        <Route path="/shop" element={Footer}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
