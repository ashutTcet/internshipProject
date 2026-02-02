require('dotenv').config();
const mongoose = require('mongoose');
const MenuItem = require('./models/MenuItem');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

const menuItems = [
  // Breakfast
  {
    name: 'Classic Pancakes',
    description: 'Fluffy pancakes served with maple syrup and butter',
    price: 8.99,
    category: 'breakfast',
  },
  {
    name: 'English Breakfast',
    description: 'Eggs, bacon, sausage, beans, toast, and grilled tomato',
    price: 12.99,
    category: 'breakfast',
  },
  {
    name: 'French Toast',
    description: 'Golden toast with cinnamon, berries, and whipped cream',
    price: 9.99,
    category: 'breakfast',
  },
  {
    name: 'Eggs Benedict',
    description: 'Poached eggs on English muffin with hollandaise sauce',
    price: 11.99,
    category: 'breakfast',
  },
  
  // Lunch
  {
    name: 'Grilled Chicken Sandwich',
    description: 'Tender chicken breast with lettuce, tomato, and mayo',
    price: 10.99,
    category: 'lunch',
  },
  {
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce with parmesan and croutons',
    price: 9.99,
    category: 'lunch',
  },
  {
    name: 'Club Sandwich',
    description: 'Triple-decker with turkey, bacon, lettuce, and tomato',
    price: 11.99,
    category: 'lunch',
  },
  {
    name: 'Vegetable Soup',
    description: 'Hearty vegetable soup with fresh herbs',
    price: 7.99,
    category: 'lunch',
  },
  
  // Dinner
  {
    name: 'Grilled Steak',
    description: 'Premium beef steak with seasonal vegetables and mashed potatoes',
    price: 24.99,
    category: 'dinner',
  },
  {
    name: 'Roasted Chicken',
    description: 'Herb-roasted chicken with roasted vegetables and gravy',
    price: 18.99,
    category: 'dinner',
  },
  {
    name: 'Salmon Fillet',
    description: 'Pan-seared salmon with lemon butter sauce and asparagus',
    price: 22.99,
    category: 'dinner',
  },
  {
    name: 'Vegetable Risotto',
    description: 'Creamy arborio rice with seasonal vegetables',
    price: 16.99,
    category: 'dinner',
  },
  {
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta with bacon, egg, and parmesan',
    price: 15.99,
    category: 'dinner',
  },
  
  // Beverages
  {
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice',
    price: 4.99,
    category: 'beverages',
  },
  {
    name: 'Coffee',
    description: 'Freshly brewed coffee',
    price: 2.99,
    category: 'beverages',
  },
  {
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    price: 4.49,
    category: 'beverages',
  },
  {
    name: 'Iced Tea',
    description: 'Refreshing iced tea with lemon',
    price: 3.49,
    category: 'beverages',
  },
  {
    name: 'Smoothie',
    description: 'Fresh fruit smoothie with yogurt',
    price: 5.99,
    category: 'beverages',
  },
];

const seedData = async () => {
  try {
    await connectDB();
    
    // Clear existing data
    await MenuItem.deleteMany();
    console.log('Cleared existing menu items');
    
    // Insert new data
    await MenuItem.insertMany(menuItems);
    console.log('Menu items seeded successfully');
    
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
