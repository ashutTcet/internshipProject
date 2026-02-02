# The Daily Hearth - Restaurant Website

A full-stack MERN (MongoDB, Express, React, Node.js) restaurant website with a simple and classic design.

## Features

- 🏠 **Landing Page** - Welcoming hero section with restaurant overview
- 💰 **Prices Page** - Complete menu with categorized items and pricing
- 📞 **Contact & Booking** - Table reservations and contact form
- 🔐 **Login/Signup** - Secure user authentication
- 🗺️ **Multiple Locations** - Interactive maps showing restaurant branches
- 🚚 **Home Services** - Food delivery information and ordering
- 📅 **Daily Food Service** - Subscription-based daily meal plans

## Tech Stack

- **Frontend**: React, React Router, Axios, Leaflet Maps
- **Backend**: Node.js, Express, JWT Authentication
- **Database**: MongoDB with Mongoose
- **Styling**: CSS3 with classic design principles

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/ashutTcet/internshipProject.git
cd internshipProject
```

2. Install backend dependencies:
```bash
cd server
npm install
```

3. Install frontend dependencies:
```bash
cd ../client
npm install
```

4. Create environment variables:

**Server (.env in /server)**
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
```

**Client (.env in /client)**
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_MAPS_API_KEY=your_google_maps_api_key
```

5. Start the development servers:

**Backend (from /server)**
```bash
npm run dev
```

**Frontend (from /client)**
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
internshipProject/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context (Auth)
│   │   ├── utils/         # Helper functions
│   │   ├── styles/        # CSS files
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                # Node.js backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Helper functions
│   ├── server.js
│   └── package.json
│
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

### Bookings
- `POST /api/bookings` - Create table booking (protected)
- `GET /api/bookings` - Get user bookings (protected)
- `PUT /api/bookings/:id` - Update booking (protected)
- `DELETE /api/bookings/:id` - Cancel booking (protected)

### Subscriptions
- `POST /api/subscriptions` - Create meal subscription (protected)
- `GET /api/subscriptions` - Get user subscriptions (protected)
- `PUT /api/subscriptions/:id` - Update subscription (protected)
- `DELETE /api/subscriptions/:id` - Cancel subscription (protected)

### Contact
- `POST /api/contact` - Submit contact form

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu/:category` - Get items by category

## Design Philosophy

**The Daily Hearth** features a simple, classic design with:
- Warm, earthy color palette (beige, brown, cream, olive green)
- Clean typography
- Intuitive navigation
- Mobile-responsive layout
- Minimal animations for elegant user experience

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please contact through the website's contact form or open an issue.
