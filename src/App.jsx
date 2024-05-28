import React from 'react';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Not__found from './Components/Not__found/Not__found';
import Single from './Components/Single/Single';
import Contact from './Components/Contact/Contact';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Single />} />
        <Route path="*" element={<Not__found />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/register" element={''} />
        <Route path="/" element={''}>
          <Route path="admin" element={''} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default App;
