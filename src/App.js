import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import Home from "./pages/HomePage/Home";
import { Toaster } from "react-hot-toast";
import OnSale from "./pages/OnSale/OnSale";
import Valiadation from "./components/Valiadation/Validation";

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
          <Route path="/sale" element={<OnSale></OnSale>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/order" element={<Valiadation></Valiadation>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
