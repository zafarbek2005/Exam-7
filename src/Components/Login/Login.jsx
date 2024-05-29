import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../Api';
import './login.scss';

const Login = () => {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const user = { username, password };
      const res = await axios.post("/auth/login", user);
      console.log("res>>>", res.data.token);
      toast.success("Welcome!");
      localStorage.setItem("x-auth-token", res.data.token);
      navigate("/admin");
    } catch (err) {
      console.error("err>>>", err);
      toast.error("Username or password is incorrect");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <br />
    <div className="siginIn Conteiner">
        <form onSubmit={handleLogin}>    
          <label>Username</label>
            <div className="single__int"> 
                  <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                   />
            </div> 
          <label>Password</label>
            <div className="single__int"> 
                
                  <input type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                   />
            </div>
            <div className='btnlar'> 
            <button>LOGIN</button>
            <button onClick={()=> navigate(-1)} id='back'>Back to Home</button>
            </div>
        </form>


    </div>
    
 
    
    

    </>
  );
};

export default Login;
