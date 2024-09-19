import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CollectibleItem from './CollectibleItem';

const Room = ({ roomData, onCollectItem, collectedItems, onRoomComplete }) => {
  const [itemDescription, setItemDescription] = useState('');

  useEffect(() => {
    setItemDescription('');
  }, [roomData]);

  const handleCollectItem = (item) => {
    onCollectItem(item);
    setItemDescription(item.description);
  };

  const allItemsCollected = roomData.collectibleItems.every(item => 
    collectedItems.some(collectedItem => collectedItem.name === item.name)
  );

  const handleContinue = () => {
    setItemDescription('');
    onRoomComplete(roomData.id);
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="mb-2 text-sm">{roomData.description}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-2">
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
          <p className="text-green-400 text-sm mt-2">{itemDescription}</p>
        )}
        {allItemsCollected && (
          <motion.button
            className="mt-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded text-sm"
            onClick={handleContinue}
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
