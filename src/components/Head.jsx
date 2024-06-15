import './Head.css';
import useUserNameStore from "./UserNameStore";
import { useState } from "react";

function Head() {
  const setUsername = useUserNameStore((state) => state.setUsername); // Correct function
  const [usernameInput, setUsernameInput] = useState("");

  const handleUserNameInput = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleChangeUsername = () => {
    if (usernameInput.trim()) {
      setUsername(usernameInput); // Use setUsername to set new username
      setUsernameInput(""); // Clear input after setting the username
    } else {
      console.error("Username cannot be empty.");
    }
  };

  return (
    <div className="header">
      <div className="title">
        GitHub Finder
      </div>
      <div className="author">
        by Paul Karanja
      </div>
      <div className="searchSection">
        <input
          type="text"
          className="text"
          placeholder="Enter a username"
          value={usernameInput} // Controlled component
          onChange={handleUserNameInput}
        />
        <button className="search" onClick={handleChangeUsername}>Search</button>
      </div>
    </div>
  );
}

export default Head;
