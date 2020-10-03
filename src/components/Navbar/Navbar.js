import React from "react";
import { auth } from "../../fire";
import UserInfo from "../UserInfo/index";
import "./style.css";

const Navbar = ({ handleLogout }) => {
  

  return (
    <section className="home">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/home">
          Artscape
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/studio">
                My Studio<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/feed">
                Art Feed
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Inbox">
                Inbox
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart">
                Cart
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search for Artist"
              aria-label="Search"
            ></input>
            <button
              className="search"
              type="submit"
            >
              Search
            </button>
          </form>
          <UserInfo />
        </div>

        <button className="exit"
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign out
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
