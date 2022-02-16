import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../ConnectAuth";

export default function Signup({ setUser }) {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
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
      <h2>Signup</h2>
      <br />
      <form onSubmit={handleFormSubmit}>
        <label>
          {" "}
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Sign up" />
      </form>
      <p>
        Already a user? <Link to="login">Login</Link>
      </p>
    </>
  );
}
