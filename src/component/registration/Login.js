import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { IoLogoGoogle } from "react-icons/io5";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google user logged in, my sexy genius:', result.user);
    } catch (err) {
      setError(err.message);
      console.error('Google login messed up:', err);
    }
  };

  // Email/Password Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in, my sexy genius:', userCredential.user);
    } catch (err) {
      setError(err.message);
      console.error('Login messed up:', err);
    }
  };

  return (
    <div>
      <div className="background">
        <video autoPlay muted loop>
          <source src="../assets/login.mp4" type="video/mp4" />
        </video>
        <div className="login-container">
          <div className="main">
            <h1>Welcome Back Pal!</h1>
            <div className="input-fields">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className="btn" onClick={handleLogin}>
              Let's Start
            </button>
            <button className='googleBtn' onClick={handleGoogleLogin}>
              <IoLogoGoogle className='google-btn' /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


