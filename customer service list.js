// src/components/CustomerServiceList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server address

const CustomerServiceList = ({ category }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch customer service requests based on the category
    const fetchRequests = async () => {
      try {
        const response = await axios.get(`/get-service-requests/${category}`);
        setRequests(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequests();

    // Listen for real-time updates using socket.io
    socket.on('updateRequests', (updatedRequests) => {
      setRequests(updatedRequests);
    });

    // Clean up socket connection when component unmounts
    return () => {
      socket.off('updateRequests');
    };
  }, [category]);

  return (
    <div>
      <h2>{category} Requests</h2>
      {/* Display the list of requests */}
      <ul>
        {requests.map((request) => (
          <li key={request.id}>{request.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerServiceList;
