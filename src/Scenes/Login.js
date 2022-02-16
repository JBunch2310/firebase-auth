import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../ConnectAuth";

export default function Login({ setUser }) {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        //setUser
        setUser(result.user);
        //navigate to home
        navigate("/");
      })
      .catch(alert);
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        //setUser
        setUser(result.user);
        //navigate to home
        navigate("/");
      })
      .catch(alert);
  };
  return (
    <>
      <h2>Login</h2>
      <br />
      <form onSubmit={handleFormSubmit}>
        <label>Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}/>
        </label>
        <input type="submit" value="Login" />
      </form>
      <button
        onClick={handleGoogleLogin}
        style={{
          backgroundColor: "black", 
          color: "white", 
          border: "none" }}>
        Sign in with Google</button>
      <p>
        Not a user? <Link to="/signup">Sign up</Link>
      </p>
    </>
  )
}
