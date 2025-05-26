# 📡 Real-Time Chat Application Backend

This repository contains the backend implementation of a real-time chat application using the **MERN stack** with **Socket.IO** for bi-directional communication.

## 🚀 Features

- 🔐 JWT-based Authentication and Authorization
- 💬 Real-Time Messaging with Socket.IO
- 👥 One-on-One and Group Chats
- 📜 Message History and Persistence
- ✉️ Message Status (Sent, Delivered, Read)
- 📱 RESTful APIs for Web, Mobile, and Desktop Clients
- 📊 Scalable Architecture Design

## 📦 Technologies Used

- Node.js + Express.js
- MongoDB + Mongoose
- Socket.IO
- JSON Web Tokens (JWT)
- Redis (for future horizontal scalability)

## 📡 Real-Time Features

- Users can **send and receive messages in real-time**.
- **Typing indicators** are supported.
- **Room-based** messaging using Socket.IO.
- **Read Receipts**: Track if a message has been read by the recipient(s).
- **Offline Message Queue**: Undelivered messages are stored and sent when the user reconnects.

## 🛡️ Security Features

- JWT-based **authentication and authorization**
- **Role-based access control** for group admin privileges
- **Input sanitization** (e.g., MongoDB query injection)

## Future Improvements & Features
- Implement Redis for caching and session management to improve scalability and performance  
- Horizontal scaling support with load balancing for handling large volumes of concurrent connections  
- Advanced message delivery guarantees (e.g., exactly-once delivery, message ordering)  
- Offline message queueing and push notifications  
- Enhanced security features such as rate limiting, IP whitelisting, and 2FA  
- Full-text search support for message content, attachments, and metadata  
- Support for message attachments (images, files, videos) with efficient storage and retrieval  
- GDPR and privacy compliance measures

## API Endpoints Summary

### User APIs (`/api/user`)
- **POST** `/register` — Register a new user  
- **POST** `/login` — Login a user  
- **GET** `/` — Search users (optional query parameter: `search`)

### Chat APIs (`/api/chat`)
- **POST** `/` — Access or create a one-on-one chat  
- **GET** `/` — Fetch all chats for the logged-in user  
- **POST** `/group` — Create a new group chat  
- **PUT** `/grouprename` — Rename a group chat  
- **PUT** `/groupadd` — Add a user to a group chat  
- **PUT** `/groupremove` — Remove a user from a group chat  

### Message APIs (`/api/message`)
- **POST** `/` — Send a message  
- **GET** `/:chatId` — Fetch all messages for a chat
