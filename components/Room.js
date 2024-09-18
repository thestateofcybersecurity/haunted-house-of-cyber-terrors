import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CollectibleItem from './CollectibleItem';

const Room = ({ roomData, onCollectItem, collectedItems, onRoomComplete }) => {
  const [itemDescription, setItemDescription] = useState('');

  const handleCollectItem = (item) => {
    onCollectItem(item);
    setItemDescription(item.description);
  };

  const allItemsCollected = roomData.collectibleItems.every(item => 
    collectedItems.some(collectedItem => collectedItem.name === item.name)
  );

  return (
    <div className="room relative min-h-screen bg-gray-900 text-white p-6 pb-32">
      <h2 className="text-3xl font-bold mb-4 text-center">{roomData.title}</h2>
      <div className="relative w-full h-[calc(100vh-300px)] mb-4">
        <Image 
          src={`/images/day${roomData.day}.webp`}
          alt={roomData.title}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
      >
        <p className="mb-4">{roomData.description}</p>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {roomData.collectibleItems.map((item, index) => (
            <CollectibleItem
              key={index}
              item={item}
              onCollect={() => handleCollectItem(item)}
              isCollected={collectedItems.some(i => i.name === item.name)}
            />
          ))}
        </div>
        {itemDescription && (
          <p className="text-green-400 mt-4">{itemDescription}</p>
        )}
        {allItemsCollected && (
          <motion.button
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onRoomComplete(roomData.id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Continue to Next Room
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default Room;
