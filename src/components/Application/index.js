import React, { useContext } from "react";
import { Router } from "@reach/router";

import SignIn from "../SignIn/index";
import Signup from "../Signup/index";
import PasswordReset from "../PasswordReset/index";
import ProfilePage from "../ProfilePage/index";
import { UserContext } from "../../Providers/UserProvider";


//Pages
import Home from "../../Pages/Home";
import Feed from "../../Pages/Feed";
import Inbox from "../../Pages/Inbox";
import Studio from "../../Pages/Studio";

function Application() {
  const user = useContext(UserContext);
  return ( user ? 
    <ProfilePage />
    : 
    <Router>
      <Signup path="signup" />
      <SignIn path="/" />
      <PasswordReset path = "passwordReset" />
      
    </Router>
  );
}

export default Application;