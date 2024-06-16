import { useState, useEffect } from "react";
import useUserNameStore from "./UserNameStore";
import './Following.css';
import { IoMdGitCommit } from "react-icons/io";

function Following() {
  const username = useUserNameStore((state) => state.username);
  const setUsername = useUserNameStore((state) => state.setUsername); 
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    if (username) {
      async function fetchFollowing() {
        try {
          const response = await fetch(`https://api.github.com/users/${username}/following`);
          if (response.ok) {
            const data = await response.json();
            setFollowing(data);
          } else {
            console.error("Failed to fetch following:", response.status);
          }
        } catch (error) {
          console.error("Error fetching following:", error);
        }
      }
      fetchFollowing();
    }
  }, [username]);

  const handleChangeUsername = (newUsername) => {
    if (newUsername.trim()) {
      setUsername(newUsername);
    } else {
      console.error("Username cannot be empty.");
    }
  };

  return (
    <div className="following-container">
      <h2 className="following-title">Following of {username}</h2>
      <div className="following-grid">
        {following.map((user) => (
          <div key={user.id} className="following-item">
            <img src={user.avatar_url} alt={user.login} className="following-avatar" />
            <p>{user.login}</p>
            <button onClick={() => handleChangeUsername(user.login)}> <a href=""><IoMdGitCommit /></a> View {user.login}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Following;
