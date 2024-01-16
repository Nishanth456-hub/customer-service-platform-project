// src/components/CustomerServiceForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server address

const CustomerServiceForm = () => {
  const [category, setCategory] = useState('');
  const [comments, setComments] = useState('');

  const submitForm = async () => {
    try {
      // Make a POST request to submit the form data
      const response = await axios.post('/submit-service-request', { category, comments });
      console.log(response.data);

      // Emit a socket event to notify about the new request
      socket.emit('newRequest', response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Customer Service Form</h2>
      <form>
        {/* ... existing form code ... */}
        <button type="button" onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
};

export default CustomerServiceForm;
