import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./scss/Login.scss";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Login</h1>
        <label className="login__label" forHtml="email">Email</label>
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="login__label" forHtml="password">Password<Link to="/reset" className="login__link">Forgot Password</Link></label>
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <div className="login__or">Or</div>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          <FcGoogle/>Login with Google
        </button>
        <div>
          Don't have an account? <Link to="/register" className="login__link">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;