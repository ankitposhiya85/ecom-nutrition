import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Photos from "./pages/photos";
import ScrollToTop from "./components/scroll";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import Personal from "./pages/personal";
import Changepassword from "./pages/changepassword";
import Address from "./pages/address";
import Productdetail from "./pages/productdetail";
import Orders from "./pages/orders";
import Personal1 from "./pages/personal1";
import Addaddress from "./pages/addaddress";
import Admin from "./pages/admin";
import Adminorders from "./pages/adminorders";
import Adminproducts from "./pages/adminproducts";
import Newproduct from "./pages/newproduct";
import ProtectedRoutes from "./pages/ProtectedRoutes";








function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/product" element={<Product />}></Route>
              <Route path="/photos" element={<Photos />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/orders" element={<Orders />}></Route>
              <Route path="/personal1" element={<Personal1 />}></Route>
              <Route path="/personal" element=
                {
                  
                    <Personal />
                
                }>
              </Route>
              <Route path="/changepassword" element={<Changepassword />}></Route>
              <Route path="/address" element={<Address />}></Route>
              <Route path="/productdetail/:id" element={<Productdetail />} />
              <Route path="/addaddress" element={<Addaddress />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/adminorders" element={<Adminorders />} />
              <Route path="/adminproducts" element={<Adminproducts />} />
              <Route path="/newproduct" element={<Newproduct />} />
            </Routes>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
