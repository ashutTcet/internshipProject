# Setup Guide

## Prerequisites

- Node.js v14 or higher
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/ashutTcet/internshipProject.git
cd internshipProject
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
MONGODB_URI=mongodb://localhost:27017/daily-hearth
JWT_SECRET=your_secure_jwt_secret_key
PORT=5000
NODE_ENV=development
```

**Note**: Replace `your_secure_jwt_secret_key` with a strong secret key. If using MongoDB Atlas, use your Atlas connection string for `MONGODB_URI`.

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

### 4. Seed Database with Sample Menu Items (Optional)

```bash
cd ../server
node utils/seedMenu.js
```

## Running the Application

### Option 1: Run Both Servers Concurrently (Recommended)

From the root directory:

```bash
npm install
npm run dev
```

This will start both the backend server (port 5000) and frontend development server (port 3000).

### Option 2: Run Servers Separately

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

## Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## MongoDB Setup

### Local MongoDB Installation

#### Ubuntu/Debian:
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

#### macOS:
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Windows:
Download and install from: https://www.mongodb.com/try/download/community

### MongoDB Atlas (Cloud)

1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in server/.env with your Atlas connection string

## Building for Production

### Build Frontend

```bash
cd client
npm run build
```

The optimized production build will be in `client/build` directory.

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user (requires authentication)

### Bookings
- POST `/api/bookings` - Create booking (requires authentication)
- GET `/api/bookings` - Get user's bookings (requires authentication)
- GET `/api/bookings/:id` - Get single booking (requires authentication)
- PUT `/api/bookings/:id` - Update booking (requires authentication)
- DELETE `/api/bookings/:id` - Cancel booking (requires authentication)

### Subscriptions
- POST `/api/subscriptions` - Create subscription (requires authentication)
- GET `/api/subscriptions` - Get user's subscriptions (requires authentication)
- GET `/api/subscriptions/:id` - Get single subscription (requires authentication)
- PUT `/api/subscriptions/:id` - Update subscription (requires authentication)
- DELETE `/api/subscriptions/:id` - Cancel subscription (requires authentication)

### Contact
- POST `/api/contact` - Submit contact form

### Menu
- GET `/api/menu` - Get all menu items
- GET `/api/menu?category=breakfast` - Get items by category
- GET `/api/menu/:category` - Get items by category

## Troubleshooting

### Port Already in Use

If port 3000 or 5000 is already in use:

```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000 (macOS/Linux)
lsof -ti:5000 | xargs kill -9
```

### MongoDB Connection Issues

1. Ensure MongoDB is running:
   ```bash
   sudo systemctl status mongod
   ```

2. Check your connection string in `.env`
3. For Atlas, ensure your IP is whitelisted

### Build Errors

Clear node_modules and reinstall:

```bash
# In server directory
rm -rf node_modules package-lock.json
npm install

# In client directory
rm -rf node_modules package-lock.json
npm install
```

## Features

- User authentication with JWT
- Table booking system
- Daily meal subscription service
- Interactive location maps
- Home delivery information
- Responsive design
- Contact form

## Tech Stack

- **Frontend**: React 18, React Router 6, React Leaflet, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS3 with classic design
