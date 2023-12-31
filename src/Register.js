import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "./scss/Register.scss";
import { FcGoogle } from "react-icons/fc";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Register</h2>
        <label className="register__label" forHTML="name">Full Name</label>
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <label className="register__label" forHTML="email">Email address</label>
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <label className="register__label" forHTML="password">Password</label>
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <div className="register__or">Or</div>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        ><FcGoogle/>
          Register with Google
        </button>
        <div>
          Already have an account? <Link className="register__link" to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;