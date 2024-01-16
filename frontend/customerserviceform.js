
import React, { useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server address

const CustomerServiceForm = () => {
  const [category, setCategory] = useState('');
  const [comments, setComments] = useState('');

  const submitForm = async () => {
    try {
     
      const response = await axios.post('/submit-service-request', { category, comments });
      console.log(response.data);

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
