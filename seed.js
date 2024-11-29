const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Artwork = require('./models/Artwork');

dotenv.config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        // Clear existing data
        await User.deleteMany({});
        await Artwork.deleteMany({});

        // Hash passwords
        const password1 = await bcrypt.hash('password1', 10);
        const password2 = await bcrypt.hash('password2', 10);
        const adminPassword = await bcrypt.hash('adminpass', 10);

        // Create sample users
        const users = await User.insertMany([
            { username: 'artist1', email: 'artist1@example.com', password: password1, bio: 'Bio for artist1', role: 'artist' },
            { username: 'artist2', email: 'artist2@example.com', password: password2, bio: 'Bio for artist2', role: 'artist' },
            { username: 'admin', email: 'admin@example.com', password: adminPassword, bio: 'Admin user', role: 'admin' }
        ]);

        // Create sample artworks with image URLs
        const artworks = await Artwork.insertMany([
            { title: 'Sunset', description: 'A beautiful sunset', image: 'https://example.com/images/sunset.jpg', price: 100, artistId: users[0]._id, category: 'Nature' },
            { title: 'Mountain', description: 'A majestic mountain', image: 'https://example.com/images/mountain.jpg', price: 150, artistId: users[0]._id, category: 'Nature' },
            { title: 'Cityscape', description: 'A bustling city', image: 'https://example.com/images/cityscape.jpg', price: 200, artistId: users[1]._id, category: 'Urban' }
        ]);

        console.log('Database seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase(); 