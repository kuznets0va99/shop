import Navbar from "./components/navbar"; 
import Footer from "./components/footer"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Cart from "./pages/cart";
import { CartProvider } from "react-use-cart";



function App() {
  return (
    <BrowserRouter>
      <div>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
          <Footer/>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
