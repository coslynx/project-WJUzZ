import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from backend API
    const fetchUserData = async () => {
      try {
        const response = await fetch('backend/api/userData');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading user profile...</p>
      ) : (
        <div>
          <h2>{userData.name}'s Profile</h2>
          <p>Email: {userData.email}</p>
          <p>Interests: {userData.interests.join(', ')}</p>
          <p>Hobbies: {userData.hobbies.join(', ')}</p>
          {userData.photos.length > 0 && (
            <div>
              <h3>Photos</h3>
              <div>
                {userData.photos.map((photo, index) => (
                  <img key={index} src={photo} alt={`Photo ${index + 1}`} />
                ))}
              </div>
            </div>
          )}
          {userData.videos.length > 0 && (
            <div>
              <h3>Videos</h3>
              <div>
                {userData.videos.map((video, index) => (
                  <video key={index} controls>
                    <source src={video} type="video/mp4" />
                  </video>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;