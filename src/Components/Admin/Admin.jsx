import React from 'react';
import './admin.scss';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.clear();
    navigate("/register"); 
  };

  return (
    <>
      <div className="admin__nav">
        <Link to={"/"} className='admina'>Home</Link>
        <Link to={"/Contact"} className='admina'>Contact Us</Link>
      </div>
      <div className="admin Container">
        <h3 className='Adminh3'>Admin panel</h3>
        <div className="admin__text">
          <p className='adminpp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
          <p className='adminpp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
          <p className='adminpp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
        </div>
        <button className='adminbutton' onClick={handleLogout}>Log out</button>
      </div>
    </>
  );
};

export default Admin;
