import { useState, useEffect } from "react";
import useUserNameStore from "./UserNameStore";

function Followers() {
  const username = useUserNameStore((state) => state.username);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (username) {
      async function fetchFollowers() {
        try {
          const response = await fetch(`https://api.github.com/users/${username}/followers`);
          if (response.ok) {
            const data = await response.json();
            setFollowers(data);
          } else { 
            console.error("Failed to fetch followers:", response.status);
          }
        } catch (error) {
          console.error("Error fetching followers:", error);
        }
      }
      fetchFollowers();
    }
  }, [username]);

  return (
    <div className="followers-container">
      <h2 className="followers-title">Followers of {username}</h2>
      <div className="followers-grid">
        {followers.map((follower) => (
          <div key={follower.id} className="follower-item">
            <img src={follower.avatar_url} alt={follower.login} className="follower-avatar" />
            <p>{follower.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Followers;
