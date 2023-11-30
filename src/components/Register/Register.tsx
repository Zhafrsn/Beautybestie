import React, { useState } from 'react';
import { Navbar } from "../Navbar/Navbar";
import '../../styles/Register.css';

export const Register: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="Register">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" value={fullName} onChange={e => setFullName(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};