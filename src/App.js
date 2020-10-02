import React, { useContext } from "react";
import { Router } from "react-router-dom";
import SignIn from "./components/SignIn/index";
import Signup from "./components/Signup/index";
import Application from "./components/Application/index";
import UserProvider from "./Providers/UserProvider";



function App() {
  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;