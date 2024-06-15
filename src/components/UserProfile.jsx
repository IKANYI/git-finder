import { useEffect, useState } from "react";
import useUserNameStore from "./UserNameStore";

function UserProfile() {
  const username = useUserNameStore((state) => state.username);
  const [userProfile, setUserProfile] = useState("");
  const [name, setName] = useState("");
  const [usename, setUsename] = useState("");
  const [bio, setBio] = useState("");
  const [repo, setRepo] = useState("");
  const [follower, setFollower] = useState("");

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserProfile(data.avatar_url);
          setName(data.name);
          setUsename(data.login);
          setBio(data.bio);
          setRepo(data.public_repos);
          setFollower(data.followers);
        } else {
          console.error("Failed to fetch user profile:", response.status);
          setUserProfile("");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUserProfile("");
      }
    }

    if (username) {
      fetchUserProfile();
    }
  }, [username]); 

  return (
    <div className="home">
      {userProfile ? (
        <img src={userProfile} alt="User Avatar" />
      ) : (
        <p>Loading...</p>
      )}
      <h2>{name}</h2>
      <h3>{usename}</h3>
      <p>{bio}</p>
      <p>{repo} public repos</p>
    </div>
  );
}

export default UserProfile;
