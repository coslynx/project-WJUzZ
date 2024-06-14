import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunityFeatures = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://api.example.com/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users: ', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Community Features</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityFeatures;