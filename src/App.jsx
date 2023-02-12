import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage } from "./Components/ChatPage";
import { Login } from "./Components/Login";
import { Home } from "./Components/Home";
import { auth } from "./firebase";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <BrowserRouter>
      <div className="App">
        {user ? (
          <Routes>
            <Route path="/:emailID" element={<ChatPage currentUser={user} signOut={signOut} />} />
            <Route path="/" element={<Home currentUser={user} signOut={signOut} />} />
          </Routes>
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
