import React from "react";
import "./Style/Login.css";
import db, { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";


export function Login({ setUser }) {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        const newUser = {
          fullname: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        navigate("/");
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        db.collection("users").doc(result.user.email).set(newUser);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login-container"> 
        <div className="scanner">
          <div>
            <h4>Use WhatsApp on your computer</h4>
            <p>Click on 'Login with Google' button</p>
            <img className="login-icon" src="./Whatsapp-logo.png" alt="Whatsapp-logo" />
          </div>
          <img className="qr-code" src="https://preview.redd.it/3ipyc7vvofh61.png?width=392&format=png&auto=webp&s=5cd31d0bebfc7d899e80d074ac1f1900b3ccccef" alt="QR-Code"/>
        </div>
        <p className="login-name">WhatApp Web</p>
        <button className="login-btn" onClick={signInWithGoogle}>
          <img src="./google-logo.png" alt="login with google" />
          Login with Google
        </button>
      </div>
    </div>
  );
}
