
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); 

const CustomerServiceList = ({ category }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {

    const fetchRequests = async () => {
      try {
        const response = await axios.get(`/get-service-requests/${category}`);
        setRequests(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequests();

    
    socket.on('updateRequests', (updatedRequests) => {
      setRequests(updatedRequests);
    });

    
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
