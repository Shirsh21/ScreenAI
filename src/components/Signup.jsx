import { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Optional CSS for styling
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password === confirmPassword && (email !=="")) {
      console.log('Sign Up Details:', { email, password });
      
      try{
         await axios.post('backendurl',{
            email,
            password,
          });
          setEmail('');
          setConfirmPassword('');
          setPassword('');
          navigate('/login')

      }catch(error){
        console.log("Error: ",error);
      console.log("json format of data sent to server ");
      }
    }
    else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        {/* Add background image/design */}
      </div>
      <div className="signup-right">
        <h2>Bonjour!</h2>
        <p>TAGLINE!</p>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Email<span className="required">*</span></label>
            <input
              type="email"
              placeholder="Enter your mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password<span className="required">*</span></label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password<span className="required">*</span></label>
            <input
              type="password"
              placeholder="Enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-button">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
