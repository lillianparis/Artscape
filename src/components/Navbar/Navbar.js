import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';

import "./style.css";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

const Navbar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  useEffect(() => {
    setActiveMenu(false);
  }, [location]);

  return (
    <>
      <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">
          Artscape
        </a>
        <button
          class="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <input
          class="form-control form-control-dark w-100"
          type="text"
          placeholder="Search for an Artist"
          aria-label="Search"
        ></input>
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a
              class="nav-link"
              href="/signup"
              onClick={() => 
                signOut()}
              
            >
              Sign out
            </a>
            {!currentUser && [
              <li key={1}>
                <Link to="/signup">
                  Login
                  <i class="fas fa-user-circle"></i>
                </Link>
              </li>
            ]}
          </li>
          <Link to="/cart">
                Your Cart ({totalNumCartItems})
                <i class="fas fa-shopping-basket"></i>
              </Link>
        </ul>
      </nav>

      
    </>
  );
};

export default Navbar;
