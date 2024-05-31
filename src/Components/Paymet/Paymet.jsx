import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiCreditCard2, CiBank } from "react-icons/ci";
import Checkboxes from '../checkbox/Chekbox';
import { FaPaypal } from "react-icons/fa";
import './Paymet.scss';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Paymet = ({ onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const PaymetData = {
      firstName,
      lastName,
      email,
      address,
      phone
    };
    const botToken = "6714877771:AAHjhYSI1QCXr74V76owsIhEJN-FA_pjvhE";
    const chatId = "1976708153";
    const Xabarlar = `
      First Name: ${PaymetData.firstName}
      Last Name: ${PaymetData.lastName}
      Email: ${PaymetData.email}
      Address: ${PaymetData.address}  
      Phone: ${PaymetData.phone}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: Xabarlar,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Payment information sent successfully!");
        setTimeout(() => {
          navigate("/");
          setFirstName('');
          setLastName('');
          setEmail('');
          setAddress('');
          setPhone('');
        }, 1000); 
      } else {
        console.error("Response error:", data);
        toast.error("Failed to send payment information.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending payment information.");
    }
  };

  return (
    <div className="Paymet Container">
      <ToastContainer />
      <div className="pay__nav">
        <Link to={"/"}><p><FaArrowLeftLong /></p></Link>
        <p onClick={onClose}>X</p>
      </div>
      <h3 id='makep'>Make Payment</h3>
      <form onSubmit={handleSubmit}>
        <div className="make__inputs">
          <div className="fristsection">
            <input type="text" required placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="email" required placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Select Method of Payment</p>
            <div className="selww">
              <h3><span><CiCreditCard2 /> Credit Card Or Debit</span> <Checkboxes className="checkbox" /></h3>
              <h3><span><FaPaypal /> Paypal</span> <Checkboxes className="checkbox" /></h3>
              <h3><span><CiBank /> Bank Transfer</span> <Checkboxes className="checkbox" /></h3>
            </div>
          </div>
          <div className="secondsection">
            <input type="text" required placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <textarea required placeholder='Address for Delivery' value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
            <input required type="text" placeholder='Mobile Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
        <button type="submit">Go to Payment</button>
      </form>
    </div>
  );
};

export default Paymet;
