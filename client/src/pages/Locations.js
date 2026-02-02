import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Locations.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: 'Downtown Branch',
      address: '123 Main Street, Downtown, City 12345',
      phone: '(555) 123-4567',
      hours: 'Mon-Sun: 8:00 AM - 10:00 PM',
      position: [40.7128, -74.0060], // New York coordinates as example
    },
    {
      id: 2,
      name: 'Uptown Branch',
      address: '456 Park Avenue, Uptown, City 12346',
      phone: '(555) 234-5678',
      hours: 'Mon-Sun: 8:00 AM - 10:00 PM',
      position: [40.7829, -73.9654],
    },
    {
      id: 3,
      name: 'Westside Branch',
      address: '789 West Boulevard, Westside, City 12347',
      phone: '(555) 345-6789',
      hours: 'Mon-Sun: 8:00 AM - 10:00 PM',
      position: [40.7489, -73.9680],
    },
  ];

  return (
    <div className="locations">
      <section className="locations-header">
        <div className="container">
          <h1>Our Locations</h1>
          <p>Find The Daily Hearth near you</p>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-container">
            <MapContainer 
              center={[40.7589, -73.9851]} 
              zoom={12} 
              style={{ height: '500px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location) => (
                <Marker key={location.id} position={location.position}>
                  <Popup>
                    <div className="popup-content">
                      <h3>{location.name}</h3>
                      <p>{location.address}</p>
                      <p>{location.phone}</p>
                      <p>{location.hours}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>

      <section className="locations-list">
        <div className="container">
          <h2>All Branches</h2>
          <div className="locations-grid">
            {locations.map((location) => (
              <div key={location.id} className="location-card">
                <h3>{location.name}</h3>
                <div className="location-details">
                  <p><strong>Address:</strong> {location.address}</p>
                  <p><strong>Phone:</strong> {location.phone}</p>
                  <p><strong>Hours:</strong> {location.hours}</p>
                </div>
                <button className="btn btn-secondary">Get Directions</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
