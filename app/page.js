"use client"; // Ensure this is the very first line

import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <button
        className='bg-green-600 text-white px-4 py-2 my-10 mx-10 rounded font-bold'
        onClick={getUsers} // Attach the function to the button click event
      >
        Get DATA
      </button>

      <h1 className='text-2xl font-bold'>This is home page</h1>
      <a href="/Contact">Contact</a>
      <div className='p-8 bg-slate-100 mt-5'>
        {/* Display fetched user data */}
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
};

export default Page;
