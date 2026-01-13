# Global FootPrint - Backend API

## Overview
Node.js + Express backend with MongoDB for Global FootPrint tourism website.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT + bcrypt
- **Email**: Nodemailer
- **Validation**: express-validator

## API Endpoints

### 1. Health Check
```
GET /
GET /health
```
Returns server status

### 2. User Signup
```
POST /signup
```
**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Signup successful!"
}
```

### 3. User Login
```
POST /login
```
**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Login successful!",
  "token": "jwt-token-here",
  "user": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### 4. Contact Form
```
POST /contact
```
**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "number": "1234567890",
  "subject": "Inquiry",
  "message": "Hello..."
}
```
**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` and update:
```bash
cp .env.example .env
```

### 3. Update .env
```
PORT=3003
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
JWT_SECRET=your_secret_key
CORS_ORIGIN=http://localhost:3000
```

### 4. Start Server
```bash
npm start
```

Server runs on: http://localhost:3003

## Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed)
}
```

## Security Features
- ✅ Password hashing (bcrypt)
- ✅ JWT token generation
- ✅ Input validation
- ✅ CORS protection
- ✅ Error handling
- ✅ MongoDB injection prevention

## Email Configuration

### Gmail Setup
1. Enable 2-Factor Authentication
2. Generate App Password
3. Use App Password in EMAIL_PASS

## Error Handling
All endpoints return consistent error format:
```json
{
  "success": false,
  "message": "Error description"
}
```

## Testing

### Test Health Check
```bash
curl http://localhost:3003/
```

### Test Signup
```bash
curl -X POST http://localhost:3003/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"test123"}'
```

### Test Login
```bash
curl -X POST http://localhost:3003/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123"}'
```

## Deployment

### Environment Variables Required
- PORT
- MONGODB_URI
- EMAIL_USER
- EMAIL_PASS
- JWT_SECRET
- CORS_ORIGIN

### Recommended Platforms
- Render.com (Free tier)
- Railway.app (Free tier)
- Heroku (Paid)

## Dependencies
```json
{
  "express": "^4.21.2",
  "mongoose": "^8.9.2",
  "bcrypt": "^5.1.1",
  "jsonwebtoken": "^9.0.2",
  "nodemailer": "^6.9.16",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express-validator": "^7.2.0",
  "body-parser": "^1.20.3"
}
```

## Status
✅ **Production Ready**
