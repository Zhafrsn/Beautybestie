import '../../styles/Login.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-text">Login</h2>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      <section className="login-option-container">--- OR ---</section>
      <div className="login-option-card">
        <FontAwesomeIcon icon={faGoogle} className="sidebar__times-icon" />
        <label className="option-text">login with google</label>
      </div>
    </form>
  );
};
