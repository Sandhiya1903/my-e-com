import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/LoginSignup.css'; // Reusing the same CSS file

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempt with:', { name, email, password });
  };

  return (
    <div className="login-signup-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Create an Account</h2>
          <p>Join us and enjoy exclusive features!</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              placeholder="Full Name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="Email Address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="submit-button">
            Sign up
          </button>
          <div className="signup-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
