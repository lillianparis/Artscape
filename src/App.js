import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { checkUserSession } from "./redux/User/user.actions";
import Signup from "./components/Signup";
import PasswordReset from "./components/PasswordReset";
import Navbar from "./components/Navbar/Navbar";

//Pages
import Studio from "./Pages/Studio";
import Feed from "./Pages/Feed";
import Inbox from "./Pages/Inbox";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/studio" render={() => <Studio />} />
        <Route path="/feed" render={() => <Feed />} />
        <Route path="/inbox" render={() => <Inbox />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/orders" render={() => <Orders />} />
        <Route path="/signup" render={() => <Signup />} />
        <Route path="/passwordReset" render={() => <PasswordReset />} />
      </Switch>
    </>
  );
};

export default App;
