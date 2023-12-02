/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import { Navbar } from "../Navbar/Navbar";
import '../../styles/Register.css';
import { Sidebar } from 'components/Sidebar';

export const Register: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(false);

  const handleChange = (event: {
    preventDefault: any;
    target: {
      id: string;
      checked: boolean;
    };
  }) => {
    const isChecked = event.target.checked;
  
    if (event.target.id === "myCheckbox1") {
      setChecked(isChecked);
    } else if (event.target.id === "myCheckbox2") {
      setChecked2(isChecked);
    }
  };  

  return (
    <><Sidebar contentId="side-bar" isOpen={false} toggleSidebar={() => {}} />
      <Navbar />
      <div className="signup-container">
      <form className='signup-form' onSubmit={handleSubmit}>
        <p className='signup-header'>Sign Up</p>
        <div className='signup-input-items'>
          <div className='signup__inputs-container'>
            <label htmlFor="fullName" className='signup-label'>Full Name</label>
            <div className='signup-button'>
              <input
                type="text"
                id="fullName"
                placeholder='Your full name'
                className='signup-input'
                value={fullName}
                onChange={e => setFullName(e.target.value)} />
            </div>
          </div>
          <div className='signup__inputs-container'>
            <label htmlFor="email" className='signup-label'>Email</label>
            <div className='signup-button'>
              <input
                type="email"
                id="email"
                placeholder='Your email'
                className='signup-input'
                value={email}
                onChange={e => setEmail(e.target.value)} />
            </div>
          </div>
          <div className='signup__inputs-container'>
            <label htmlFor="phoneNumber" className='signup-label'>Phone Number</label>
            <div className='signup-button'>
              <input
                type="text"
                id="phoneNumber"
                placeholder='Your phone number'
                className='signup-input'
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)} />
            </div>
          </div>
          <div className='signup__inputs-container'>
            <label htmlFor="password" className='signup-label'>Password</label>
            <div className='signup-button'>
              <input
                type="password"
                id="password"
                placeholder='Your password'
                className='signup-input'
                value={password}
                onChange={e => setPassword(e.target.value)} />
            </div>
          </div>
          <div className='signup__inputs-container'>
            <label htmlFor="confirmPassword" className='signup-label'>Confirm Password</label>
            <div className='signup-button'>
              <input
                type="password"
                id="confirmPassword"
                placeholder='Confirm your password'  
                className='signup-input'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}/>
            </div>
            <div className='signup-checkbox-wrapper'>
                <div className='signup-checkbox'>
                  <input
                    type="checkbox"
                    id='myCheckbox1'
                    className='checkbox'
                    checked={checked}
                    onChange={handleChange}
                  />
                  <p>By signing up, I agree to the <a className='signup-tc' href='/t&c'>terms and conditions</a></p>
                </div>
                <div className='signup-checkbox'>
                  <input
                    type="checkbox"
                    id='myCheckbox2'
                    className='checkbox'
                    checked={checked2}
                    onChange={handleChange}
                  />
                  <p>I agree to receive information and commersial offers from Beautybestie</p>
                </div>
          </div>
        </div>
        </div>
        <div className='signup__wrapper'>
          <button type="submit" className='signup__btn-signup'>SIGN UP</button>
          <div className='signup__or-container'>
            <p className='signup-or'>or</p>
          </div>
          <button className="signup__btn-signup-google">
            <img src={'images/google-logo.png'} alt='logo-google' className='signup__google-logo'/>
            Continue with Google
          </button>
          <div className='signup__to-login'>
              <p>Already have an account?
              <a href='/login' className='signup__login'> LOGIN</a></p> 
          </div> 
        </div>  
      </form>
    </div></>
  );
};
