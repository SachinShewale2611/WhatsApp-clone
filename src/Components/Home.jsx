import React from "react";
import { SideBar } from "./SideBar";
import "./Style/Home.css";

export function Home({ currentUser, signOut }) {
  return (
    <div className="home">
      <div className="home-container">
        <SideBar currentUser={currentUser} signOut={signOut} />
        <div className="home-bg">
          <img src="./conversation-placeholder.png" alt="" />
        </div>
      </div>
    </div>
  );
}
