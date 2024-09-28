import  { useState } from 'react';
import './Login.css'; // Optional: for external CSS styling
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const cookie = new Cookies();
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Logging in with:', { email, password, rememberMe });

    const data = {email,password}


    try{
        const response = await axios.post("url",data);
        const token = response.data.accessToken;
        cookie.set("token",token);
        if(token)
            navigate('/home');
        else
            console.log("Error ");

    }catch(error){
        console.log("Error: ",error)
    }


  };

  return (
    <div className="login-container">
      <div className="login-left">
        {/* Add background images or designs here */}
      </div>
      <div className="login-right">
        <h2>Welcome back!</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            
              <input style={{width:'5%'}}
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
             <label style={{display:'inline-block'}}>Remember me</label>
           
            <a href="/forgot-password" className="forgot-password-link">
              Forgot your password?
            </a>
          </div>

          <button type="submit" className="login-button">Log In</button>
        </form>

        <div className="register-link">
          <p>Don’t have an account? <a href="/signup">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
