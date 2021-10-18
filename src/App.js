import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { checkUserSession } from "./redux/User/user.actions";


//Components
import PasswordReset from "./components/PasswordReset";


//Pages
import Studio from "./Pages/Studio";
import Feed from "./Pages/Feed";
import Inbox from "./Pages/Inbox";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import WithAuth from "./hoc/withAuth";
import WithAdminAuth from './hoc/withAdminAuth';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <>
      <Switch>
        <Route path="/signin" render={() => <Login />} />
        <Route path="/passwordReset" render={() => <PasswordReset />} />
        <Route path="/signup" render={() => <SignUp/>} />
        <Route exact path="/" render={() => (
        
          <Home/>
          )} />
        <Route path="/studio" render={() => <Studio />} />
        <Route path="/feed" render={() => <Feed></Feed>} />
        <Route path="/inbox" render={() => <Inbox />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/orders" render={() => <Orders />} />
        
        
        
      </Switch>
    </>
  );
};

export default App;
