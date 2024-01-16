
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

 
  socket.on('newRequest', (requestData) => {
    // Broadcast the update to all connected clients
    io.emit('updateRequests', [...existingRequests, requestData]);
  });

  
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Socket.io server running on http://localhost:${PORT}`);
});
