import app from './app';
import { Server } from 'socket.io';
import http from 'http';

const PORT = process.env.PORT || 5000;

// Khởi tạo HTTP server từ Express app
const server = http.createServer(app);

// Khởi tạo Socket.IO
const io = new Server(server, {
   path: '/socket.io',
  cors: {
    origin: "*", // cho phép frontend kết nối
    methods: ["GET", "POST", "PATCH"],
    credentials: true
  }
});

// Gắn io vào app để sử dụng ở controller
app.set('io', io);

// Lắng nghe kết nối từ client
io.on('connection', (socket) => {
  console.log('🔌 Client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('❌ Client disconnected:', socket.id);
  });
});

// ✅ Quan trọng: dùng server.listen chứ không phải app.listen
server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
   console.log(`🔗 Listening socket path: /socket.io`);
});
