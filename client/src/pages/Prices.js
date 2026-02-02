import React, { useState, useEffect } from 'react';
import { getMenuItems } from '../utils/api';
import '../styles/Prices.css';

const Prices = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' },
    { value: 'beverages', label: 'Beverages' },
  ];

  useEffect(() => {
    fetchMenuItems();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, menuItems]);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const data = await getMenuItems();
      setMenuItems(data.menuItems || []);
      setFilteredItems(data.menuItems || []);
      setError('');
    } catch (err) {
      setError('Failed to load menu items');
      console.error('Error fetching menu:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return <div className="loading">Loading menu...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="prices">
      <section className="prices-header">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Discover our delicious selection of home-cooked meals</p>
        </div>
      </section>

      <section className="menu-section">
        <div className="container">
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredItems.length === 0 ? (
              <p className="no-items">No menu items available in this category</p>
            ) : (
              filteredItems.map((item) => (
                <div key={item._id} className="menu-card">
                  <div className="menu-card-header">
                    <h3>{item.name}</h3>
                    <span className="category-badge">{item.category}</span>
                  </div>
                  <p className="menu-description">{item.description}</p>
                  <div className="menu-card-footer">
                    <span className="price">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
