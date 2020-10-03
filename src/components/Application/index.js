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

function Application() {
  const user = useContext(UserContext);
  return ( user ? 
    <>
    <Navbar />
    <Router>
      <Home path="/home" />
    <Studio path="/studio" />
    <Feed path="/feed" /> 
    <Inbox path="/Inbox" />
    <Cart path="/cart" />
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