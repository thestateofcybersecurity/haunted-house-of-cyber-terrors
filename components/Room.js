import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Room = ({ roomData, inventory, onUseItem, onRemoveItem, onRoomComplete }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [message, setMessage] = useState('');

  const handleUseItem = () => {
    if (selectedItem) {
      const result = onUseItem(selectedItem, roomData);
      setMessage(result.message);
      if (result.success) {
        onRoomComplete(roomData.id);
      }
    }
  };

  const handleRemoveItem = () => {
    if (selectedItem) {
      onRemoveItem(selectedItem);
      setSelectedItem(null);
    }
  };

  return (
    <div className="flex flex-col h-full p-4">
      <h2 className="text-2xl font-bold mb-2 text-center">{roomData.title}</h2>
      <div className="flex-grow relative mb-2">
        <Image 
          src={`/images/day${roomData.day}.webp`}
          alt={roomData.title}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <p className="mb-2 text-sm">{roomData.description}</p>
      {message && <p className="text-green-400 text-sm mb-2">{message}</p>}
      <div className="flex justify-between">
        <select
          className="bg-gray-700 text-white p-2 rounded"
          value={selectedItem ? selectedItem.name : ''}
          onChange={(e) => setSelectedItem(inventory.find(item => item.name === e.target.value))}
        >
          <option value="">Select an item</option>
          {inventory.map((item, index) => (
            <option key={index} value={item.name}>{item.name}</option>
          ))}
        </select>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded text-sm"
          onClick={handleUseItem}
          disabled={!selectedItem}
        >
          Use Item
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
          onClick={handleRemoveItem}
          disabled={!selectedItem}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default Room;
