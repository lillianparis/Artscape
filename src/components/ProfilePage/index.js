import React, { useContext } from "react";
import { UserContext } from "../../Providers/UserProvider";
import { navigate } from "@reach/router";
import {auth} from "../../fire";



const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  console.log(user);
  

  return (
      <div>
        <p>hello you are in</p>
      </div>
  )
  };

  export default ProfilePage;