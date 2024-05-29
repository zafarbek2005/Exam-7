import React from 'react';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Not__found from './Components/Not__found/Not__found';
import Single from './Components/Single/Single';
import Contact from './Components/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import Loginlink from './Pages/LoginLink/LoginLink'
import AdminLink from './Pages/AdminLink/Adminlink'
import { useGetProductsQuery } from './context/Products/Productsapi';
import Auth from './Components/Auth/Auth'
import ProductCart from './Components/Product__cart/Cart'

const App = () => {
  const { data} = useGetProductsQuery();
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Single  data={data}/>} />
        <Route path="*" element={<Not__found />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/ProductCart" element={<ProductCart/>} />
        <Route path="/register" element={<Loginlink/>} />
        <Route path="/" element={<Auth/>}>
          <Route path="admin" element={<AdminLink/>} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default App;
