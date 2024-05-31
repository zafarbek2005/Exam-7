import React, { useState, memo } from "react";
import "./contact.scss";
import Bg from "./g2.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [contactData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const botToken = "6714877771:AAHjhYSI1QCXr74V76owsIhEJN-FA_pjvhE";
    const chatId = "1976708153";
    const message = `
      Name: ${contactData.name}
      Email: ${contactData.email}
      Message: ${contactData.message}
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
            text: message,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Message sent successfully!", {});
      } else {
        console.error("Response error:", data);
        toast.error(`Failed to send message: ${data.description}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending message.", {});
    }
  };

  return (
    <>
      <div className="links_cantact">
        <Link to={"/"}>Home / </Link>
        <Link to={"/Contact"}>Contact Us</Link>
      </div>
      <div className="contact Container">
        <div
          className="img"
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="tr">
            <h3>Get in touch</h3> 
            <p>contact@e-comm.ng</p>
            <p>+234 4556 6665 34</p>
            <p>
              20 Prince Hakerem Lekki <br /> Phase 1, Lagos.
            </p>
          </div>
        </div>

        <div className="inputss">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Fullname</label>
            <input
              type="text"
              name="name"
              placeholder="Zafarbek"
              value={contactData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="zafarbekkarimboyev47@gmail.com"
              value={contactData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Type your message"
              value={contactData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <ToastContainer />
      </div>
      <div className="int">
        <input type="text" placeholder="Search query..." />
        <button>Search</button>
      </div>
    </>
  );
};

export default memo(Contact);
