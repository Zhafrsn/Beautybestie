import '../../styles/Login.css';
import { useState } from 'react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="negro">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="logen">Login</h2>
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
      </form>
    </div>
  );
};
