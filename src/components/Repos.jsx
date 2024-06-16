import { useState, useEffect } from "react";
import useUserNameStore from "./UserNameStore";
import './repos.css'

function Repos() {
  const username = useUserNameStore((state) => state.username);
  const [repos, setRepos] = useState([]);
  const [fork, setFork] = useState('');

  useEffect(() => {
    if (username) {
      async function fetchRepos() {
        try {
          const response = await fetch(`https://api.github.com/users/${username}/repos`);
          if (response.ok) {
            const data = await response.json();
            setRepos(data);
            setFork(data.fork);
          } else {
            console.error("Failed to fetch repositories:", response.status);
          }
        } catch (error) {
          console.error("Error fetching repositories:", error);
        }
      }
      fetchRepos();
    }
  }, [username]);

  return (
    <div className="repos-container">
      <h2 className="repos-title">Repositories of {username}</h2>
      <div className="repos-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-item">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Repos;
