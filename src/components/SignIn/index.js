import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/User/user.actions";
import "../SignIn/styles.css"
import AuthWrapper from "./../AuthWrapper";
import FormInput from "./../forms/FormInput";
import Button from "./../forms/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg from 'particles-bg'

function SignIn() {

  const dispatch = useDispatch();

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };
  return (


    <Form>
      <Form.Label className="text-center" id="title" style={{ width: "100%" }}>Sign In</Form.Label>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label class="label">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label class="label">Password</Form.Label>
        <Form.Control  id="label" type="password" placeholder="Password" />
      </Form.Group>
      <div className="socialSignin">
        <div className="row">
          <Button className="googlebutton" onClick={handleGoogleSignIn}>
            Sign in with Google{" "}
          </Button>{" "}
        </div>{" "}
      </div>

      <Form.Group as={Row} className="mb-3">

        <Button class="submit">Submit</Button>

      </Form.Group>

      <ParticlesBg type="color" bg={true} />
    </Form>


  )

}

// const mapState = ({ user }) => ({
//   currentUser: user.currentUser,
// });

// const SignIn = (props) => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const { currentUser } = useSelector(mapState);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     if (currentUser) {
//       resetForm();
//       history.push("/");
//     }
//   }, [currentUser]);

//   const resetForm = () => {
//     setEmail("");
//     setPassword("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(emailSignInStart({ email, password }));
//   };

// const handleGoogleSignIn = () => {
//   dispatch(googleSignInStart());
// };

//   const configAuthWrapper = {
//     headline: "LogIn",
//   };

//   return (
//     <AuthWrapper {...configAuthWrapper}>
//       <div className="loginContainer">
//         <form onSubmit={handleSubmit}>
//           <FormInput
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Email"
//             handleChange={(e) => setEmail(e.target.value)}
//           />

//           <FormInput
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Password"
//             handleChange={(e) => setPassword(e.target.value)}
//           />

//           <Button type="submit">LogIn </Button>

//           <div className="socialSignin">
//             <div className="row">
//               <Button className="googlebutton" onClick={handleGoogleSignIn}>
//                 Sign in with Google{" "}
//               </Button>{" "}
//             </div>{" "}
//           </div>

//           <div className="links">
//             <Link to="/signup">Register </Link> {` | `}{" "}
//             <Link to="/passwordReset">Reset Password </Link>{" "}
//           </div>
//         </form>{" "}
//       </div>{" "}
//     </AuthWrapper>
//   );
// };

export default SignIn;
