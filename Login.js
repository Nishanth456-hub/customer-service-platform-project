
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Login with Google</h2>
      {/* Add Google OAuth login button */}
      <Link to="/dashboard">Continue to Dashboard</Link>
    </div>
  );
};

export default Login;
