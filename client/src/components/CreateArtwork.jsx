import React, { useState } from 'react';

const CreateArtwork = () => {
    const [artwork, setArtwork] = useState({
        title: '',
        description: '',
        image: '',
        price: '',
        artistId: '',
        category: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArtwork({ ...artwork, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Artwork submitted:', artwork);
    };

    return (
        <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={artwork.title}
                onChange={handleChange}
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <textarea
                name="description"
                placeholder="Description"
                value={artwork.description}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={artwork.image}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={artwork.price}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                name="artistId"
                placeholder="Artist ID"
                value={artwork.artistId}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={artwork.category}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Create Artwork
            </button>
        </form>
    );
};

export default CreateArtwork; 