import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "../SignIn/index";
import Signup from "../Signup/index";
import PasswordReset from "../PasswordReset/index";

import Navbar from "../Navbar/Navbar"
import { UserContext } from "../../Providers/UserProvider";

//Pages
import Studio from "../../Pages/Studio";
import Feed from "../../Pages/Feed";
import Inbox from "../../Pages/Inbox";
import Cart from "../../Pages/Cart";
import Home from "../../Pages/Home";
import Artist from "../../Pages/Artist";
import Orders from "../../Pages/Orders";

function Application() {
  const user = useContext(UserContext);
  return ( user ? 
    <>
    <Navbar />
    <Router>
      <Home path="/" />
    <Studio path="/studio" />
    <Feed path="/feed" /> 
    <Inbox path="/inbox" />
    <Cart path="/cart" />
    <Artist path="/artist" />
    <Orders path="/orders" />
    </Router>
    </>
    : 
    <Router>
      <Signup path="signup" />
      <SignIn path="/" />
      <PasswordReset path = "passwordReset" />
    </Router>
  );
}

export default Application;