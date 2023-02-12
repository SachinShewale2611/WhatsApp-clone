import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style/UserProfile.css";
import db from "../firebase";

export function UserProfile({ name, photoURL, email, lastMessage, lastMessageTime }) {
  const navigate = useNavigate();
  const goToUser = (emailId) => {
    if (emailId) {
      navigate(`/${emailId}`);
    }
  };
  return (
    <div className="user-profile" onClick={() => goToUser(email) }>
      <div className="user-image">
        <img src={photoURL} alt="" />
      </div> 
      <div className="user-info">
        <p className="user-name">{name}</p>
        {lastMessage && <p className="user-lastmessage">{lastMessage}</p>}
      </div>
      <div className="user-lastmessageTime">
      <p className="user-lastmessageTime">{lastMessage && new Date(lastMessageTime?.toDate()).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
      </div>
    </div>
  );
}
