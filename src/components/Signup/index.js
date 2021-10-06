import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signUpUserStart, googleSignInStart } from './../../redux/User/user.actions';

import "./styles.css"

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, userErr } = useSelector(mapState);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setConfirmPassword] = useState('');
  const [error, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      reset();
      history.push('/');
    }

  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }

  }, [userErr]);

  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setErrors([]);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(signUpUserStart({
      displayName,
      email,
      password
    }));
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

  return (
    <section className="login">
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <div className="loginContainer" onSubmit={handleFormSubmit}>
        <h1 className="signin">Sign Up</h1>
          <label htmlFor="displayName" className="block">
            Display Name:
          </label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            handleChange={e => setDisplayName(e.target.value)}
          />
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            handleChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            handleChange={e => setPassword(e.target.value)}
          />
          <button type="submit"
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            >
          
            Sign up
          </button>
        <p className="or">or</p>
        <button
          onClick={handleGoogleSignIn}
          className="googlebutton"
        >
          Sign In with Google
        </button>
        <p className="or">
          Already have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>{" "}
        </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;