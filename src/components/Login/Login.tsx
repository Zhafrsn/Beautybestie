/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-console */
import '../../styles/Login.css';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase/config"
import { Navbar } from 'components/Navbar';
import { Sidebar } from 'components/Sidebar';
import { SuccessLogin } from 'components/PopUp/SuccessLogin';
import { LoginFailed } from 'components/PopUp/LoginFailed';
import ReCAPTCHA from 'react-google-recaptcha';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [error, setError] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    // Update the captcha value when it changes
    setCaptchaValue(value);
  };

  const handleSingIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaValue) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setShowSuccessPopup(true);
        }).catch(() => {
          setError(true);
        })
      console.log('Email:', email);
      console.log('Password:', password);
    }
    else {
      console.error('Captcha not completed');
    }
  };
  
  return (
    <>
      <Sidebar contentId="side-bar" isOpen={false} toggleSidebar={() => {}} />
      <Navbar />
      <div className='login-container'>
        <form className="login-form" onSubmit={handleSingIn}>
          <p className="login-text">Login</p>
          <div className='login__items'>
            <div className='login__email-container'>
              <label htmlFor="email" className='login-label'>Email</label>
              <div className='login-button'>
                <input
                    type="email"
                    id="email"
                    className="login-email"
                    placeholder='Enter your email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
              </div>
            </div>
            <div className='login__pw-container'>
              <label htmlFor="password" className='login-label'>Password</label>
              <div className='login-button'>
                <input
                  type='password'
                  id="password"
                  className="login-password"
                  placeholder='Enter your password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required 
                />
              </div>
              <p className='login__forgot-pw'>Forgot password ?</p>  
            </div>
          </div> 
          <div className='login__wrapper'>
          <ReCAPTCHA
        sitekey="6LcFGicpAAAAAE8KhHQrMTrUsrhv9bQH4wsbojpx"
        onChange={handleCaptchaChange}
      />
            <button type="submit" className='login__btn-login'>LOGIN</button>
            <div className='login__or-container'>
              <p className='login-or'>or</p>
            </div>
            <button className="login__btn-login-google">
              <img src={'images/google-logo.png'} alt='logo-google' className='login__google-logo'/>
              Continue with Google
            </button>
            <div className='login__to-signup'>
                <p>{"If you don't have an account, please "}
                <a href='/register' className='login__click-here'>click here</a> to Sign Up</p> 
            </div>  
          </div>  
        </form>
      </div>
      {error && <LoginFailed/>}
      {showSuccessPopup && <SuccessLogin />}
    </>
  );
};