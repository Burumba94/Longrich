import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/layout/Navbar";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/produits/:productId" element={<ProductDetail />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;