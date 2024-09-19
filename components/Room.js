import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ItemBag from './ItemBag';

const Room = ({ roomData, inventory, onUseItem, onRoomComplete }) => {
  const [message, setMessage] = useState('');

  const handleUseItem = (item) => {
    const result = onUseItem(item, roomData);
    setMessage(result.message);
    if (result.success) {
      onRoomComplete(roomData.id);
    }
  };

  return (
    <div className="relative flex flex-col h-full p-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4 text-center text-purple-300">{roomData.title}</h2>
      <div className="flex-grow relative mb-4">
        <Image 
          src={`/images/day${roomData.day}.webp`}
          alt={roomData.title}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4 text-lg text-green-200"
      >
        {roomData.description}
      </motion.p>
      {message && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-lg mb-4"
        >
          {message}
        </motion.p>
      )}
      <ItemBag items={inventory} onUseItem={handleUseItem} />
    </div>
  );
};

export default Room;
