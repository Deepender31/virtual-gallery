import React, { useState } from "react";
import ArtworkCard from "../components/ArtworkCard";
import demoArtworks from "../data/demoArtworks";
import { FaEdit } from "react-icons/fa";
import NavigationBar from "../components/NavigationBar";
import ProfileDetails from "../components/ProfileDetails";
import OrderDetails from "../components/OrderDetails";
import LikedArtworks from "../components/LikedArtworks";
import CreateArtwork from "../components/CreateArtwork";
function ArtistDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  const orders = [
    { id: 1234, status: "Completed", date: "2023-10-01" },
    { id: 5678, status: "Pending", date: "2023-10-05" },
    { id: 9101, status: "Shipped", date: "2023-10-10" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="profile-details">
            <ProfileDetails />
          </div>
        );
      case "artworks":
        return (
          <div className="artwork-list grid grid-cols-3 gap-4">
            {demoArtworks.map((artwork) => (
              <ArtworkCard key={artwork._id} artwork={artwork} />
            ))}
          </div>
        );
      case "orders":
        return (
          <div className="orders-list">
            <OrderDetails orders={orders} />
          </div>
        );
      case "sold":
        return (
          <div className="sold-artworks bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Artworks Sold
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm">
                <span>Artwork A</span>
                <span className="text-gray-600">Sold for $200</span>
                <span className="text-sm text-gray-500">Date: 2023-09-15</span>
              </li>
              <li className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm">
                <span>Artwork B</span>
                <span className="text-gray-600">Sold for $350</span>
                <span className="text-sm text-gray-500">Date: 2023-09-20</span>
              </li>
              {/* Add more items as needed */}
            </ul>
          </div>
        );
      case "liked":
        return (
          <div className="liked-artworks">
            <LikedArtworks />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="p-6 bg-white bg-opacity-70 backdrop-blur-md shadow-xl rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Artist Dashboard</h2>
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 ${
              activeTab === "profile" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("artworks")}
            className={`px-4 py-2 ${
              activeTab === "artworks"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Artworks
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 ${
              activeTab === "orders" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab("sold")}
            className={`px-4 py-2 ${
              activeTab === "sold" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Artworks Sold
          </button>
          <button
            onClick={() => setActiveTab("liked")}
            className={`px-4 py-2 ${
              activeTab === "liked" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Liked Artworks
          </button>
        </div>
        {renderContent()}
      </div>
    </>
  );
}

export default ArtistDashboard;
