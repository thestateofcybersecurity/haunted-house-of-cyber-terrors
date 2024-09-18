import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CollectibleItem from './CollectibleItem';

const Room = ({ roomData, onCollectItem, collectedItems }) => {
  const [itemDescription, setItemDescription] = useState('');

  const handleCollectItem = (item) => {
    onCollectItem(item);
    setItemDescription(item.description);
  };

  return (
    <div className="room bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{roomData.title}</h2>
      <div className="relative w-full h-64 mb-4">
        <Image 
          src={`/images/day${roomData.day}.webp`}
          alt={roomData.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">{roomData.description}</p>
        <div className="flex flex-wrap gap-4 mb-4">
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
      </motion.div>
    </div>
  );
};

export default Room;
