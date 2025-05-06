import React, { useState } from 'react';
import './Registration.css';
import { FaArrowRight } from 'react-icons/fa';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [penName, setPenName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Initialize Firestore
  const db = getFirestore();

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match, babe.");
      return;
    }
    try {
      // Create the user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered, my sexy genius:', user);
      
      // Update user profile with first and last name
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`
      });
      
      // Save additional data (penName, firstName, lastName, email) to Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        penName,
        email
      });
      
      console.log("Extra data saved, babe!");
    } catch (err) {
      setError(err.message);
      console.error('Registration fucked up:', err);
    }
  };

  return (
    <div>
      <div className="background">
        <video autoPlay muted loop>
          <source src="../assets/login.mp4" type="video/mp4" />
        </video>
        <div className="registration-container">
          <div className="left-content">
            <div className="input-fields-regestration">
              <input
                className="Input"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="Input"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className="Input"
                type="text"
                placeholder="Pen Name"
                value={penName}
                onChange={(e) => setPenName(e.target.value)}
              />
              <input
                className="Input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="Input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="Input"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
          </div>
          <div className="right-content">
            <h1>PenPals</h1>
            <h3 className="mantra">Write. Read. Explore.</h3>
            <h1>Let's Get You Buckled Up!</h1>
            <button className="registration-btn" onClick={handleRegistration}>
              Count Me In <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;

