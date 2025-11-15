import React, { useState } from "react";
import {
  FaHotel,
  FaSuitcase,
  FaPlus,
  FaTrash,
  FaEdit,
  FaChartPie,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Dummy data
  const [hotels, setHotels] = useState([
    { id: 1, name: "Grand Palace Hotel", price: 120 },
    { id: 2, name: "Ocean View Resort", price: 200 },
  ]);

  const [packages, setPackages] = useState([
    { id: 1, name: "Dubai 5 Days Tour", price: 500 },
    { id: 2, name: "Paris Honeymoon Package", price: 1200 },
  ]);

  // State for editing
  const [editingItem, setEditingItem] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  // Add new hotel
  const addHotel = () => {
    const newHotel = { id: Date.now(), name: "New Hotel", price: 150 };
    setHotels([...hotels, newHotel]);
  };

  // Delete hotel
  const deleteHotel = (id) => {
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  };

  // Add new package
  const addPackage = () => {
    const newPackage = { id: Date.now(), name: "New Package", price: 800 };
    setPackages([...packages, newPackage]);
  };

  // Delete package
  const deletePackage = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
  };

  // Start editing
  const startEdit = (item) => {
    setEditingItem(item);
    setEditName(item.name);
    setEditPrice(item.price);
  };

  // Save edit
  const saveEdit = () => {
    if (!editingItem) return;

    if (hotels.some((h) => h.id === editingItem.id)) {
      setHotels(
        hotels.map((h) =>
          h.id === editingItem.id ? { ...h, name: editName, price: editPrice } : h
        )
      );
    } else {
      setPackages(
        packages.map((p) =>
          p.id === editingItem.id ? { ...p, name: editName, price: editPrice } : p
        )
      );
    }

    setEditingItem(null);
    setEditName("");
    setEditPrice("");
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("admin"); // clear admin session
    navigate("/"); // redirect to login page
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-[#474769] text-white flex flex-col">
        <h1 className="text-3xl font-bold text-center py-6 border-b border-gray-400">
          Admin Panel
        </h1>
        <nav className="flex-1 p-4 space-y-4">
          <button className="w-full text-left p-2 rounded hover:bg-[#5a5a82] flex items-center gap-2">
            <FaChartPie /> Dashboard
          </button>
          <button className="w-full text-left p-2 rounded hover:bg-[#5a5a82] flex items-center gap-2">
            <FaHotel /> Hotels
          </button>
          <button className="w-full text-left p-2 rounded hover:bg-[#5a5a82] flex items-center gap-2">
            <FaSuitcase /> Packages
          </button>
        </nav>
        <button
          onClick={handleLogout}
          className="bg-red-600 py-3 m-4 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-4xl font-bold text-[#474769] mb-6">Welcome, Admin 👋</h2>

        {/* Hotels Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-[#474769]">Manage Hotels</h3>
            <button
              onClick={addHotel}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
            >
              <FaPlus /> Add Hotel
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex justify-between items-center"
              >
                {editingItem?.id === hotel.id ? (
                  <div className="flex flex-col w-full">
                    <input
                      className="border p-2 mb-2 rounded"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                    <input
                      className="border p-2 mb-2 rounded"
                      type="number"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                    />
                    <button
                      onClick={saveEdit}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <div>
                      <h4 className="text-lg font-semibold text-[#474769]">
                        {hotel.name}
                      </h4>
                      <p className="text-gray-600">${hotel.price} / night</p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => startEdit(hotel)}
                        className="text-green-600 hover:text-green-800"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteHotel(hotel.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Packages Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-[#474769]">Manage Packages</h3>
            <button
              onClick={addPackage}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
            >
              <FaPlus /> Add Package
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex justify-between items-center"
              >
                {editingItem?.id === pkg.id ? (
                  <div className="flex flex-col w-full">
                    <input
                      className="border p-2 mb-2 rounded"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                    <input
                      className="border p-2 mb-2 rounded"
                      type="number"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                    />
                    <button
                      onClick={saveEdit}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <div>
                      <h4 className="text-lg font-semibold text-[#474769]">
                        {pkg.name}
                      </h4>
                      <p className="text-gray-600">${pkg.price}</p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => startEdit(pkg)}
                        className="text-green-600 hover:text-green-800"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deletePackage(pkg.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
