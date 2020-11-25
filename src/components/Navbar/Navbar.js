import React from "react";
import { auth } from "../../fire";
import UserInfo from "../UserInfo/index";
import "./style.css";

const Navbar = ({ handleLogout }) => {
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
              href="#"
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign out
            </a>
          </li>
        </ul>
      </nav>

      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="sidebar-sticky pt-3">
              <ul class="nav flex-column">
                
                <li class="nav-item">
                  <a class="nav-link" href="/feed">
                    <span data-feather="feed"></span>
                    Feed
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/studio">
                    <span data-feather="studio"></span>
                    Studio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/inbox">
                    <span data-feather="users"></span>
                    Messages
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Saved Artists
                  </a>
                </li>
              </ul>

              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Shopping Cart
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Orders
                  </a>
                </li>
              </ul>
              <UserInfo />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
