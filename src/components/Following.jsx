import { useState, useEffect } from "react";
import useUserNameStore from "./UserNameStore"
import './Following.css';

function Following() {
  const username = useUserNameStore((state) => state.username);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    async function fetchFollowing() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/following`);
        if (response.ok) {
          const data = await response.json();
          setFollowing(data);
        } else {
          console.error("Failed to fetch following list", response.status);
          setFollowing([]);
        }
      } catch (error) {
        console.error("Failed to fetch following list", error);
        setFollowing([]);
      }
    }

    if (username) {
      fetchFollowing();
    }
  }, [username]);

  return (
    <div className="following">
      <h2>Following by {username}</h2>
      <ul>
        {following.length > 0 ? (
          following.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="50" />
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.login}
              </a>
            </li>
          ))
        ) : (
          <p>No following found.</p>
        )}
      </ul>
    </div>
  );
}

export default Following;
