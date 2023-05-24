import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import Home from "./pages/HomePage/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <Navbar></Navbar>
      <main style={{ minHeight: "75vh" }}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Products></Products>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
