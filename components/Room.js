import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ItemBag from './ItemBag';

const Room = ({ roomData, inventory, onUseItem, onRoomComplete }) => {
  const [message, setMessage] = useState('');
  const [showContinue, setShowContinue] = useState(false);
  const [usedItem, setUsedItem] = useState(null);
  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    console.log('Room component received inventory:', inventory);
  }, [inventory]);

  const handleUseItem = (item) => {
    const result = onUseItem(item, roomData);
    setMessage(result.message);
    setUsedItem(item);
    setShowContinue(result.success);
    setAnimationState('animate');

    setTimeout(() => {
      setAnimationState('fadeOut');
    }, 3000);
  };

  const itemVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
    fadeOut: { opacity: 0, transition: { duration: 0.5 } },
  };

  const messageVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.3 } },
    fadeOut: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative flex flex-col h-full p-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4 text-center text-purple-300 text-shadow-glow">{roomData.title}</h2>
      <div className="flex-grow relative mb-4 border-glow rounded-lg overflow-hidden">
        <Image 
          src={`/images/day${roomData.day}.webp`}
          alt={roomData.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="bg-gradient-haunted p-4 rounded-lg mb-4 max-w-2xl mx-auto border-glow">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg text-green-200 animate-flicker"
        >
          {roomData.description}
        </motion.p>
      </div>
      <AnimatePresence>
        {usedItem && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            variants={itemVariants}
            initial="initial"
            animate={animationState}
            exit="fadeOut"
          >
            <Image 
              src={`/images/items/${usedItem.image}`}
              alt={usedItem.name}
              width={100}
              height={100}
              className="mx-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {message && (
          <motion.div 
            className="text-red-400 text-lg mb-4 text-center text-shadow-glow"
            variants={messageVariants}
            initial="initial"
            animate={animationState}
            exit="fadeOut"
          >
            <p>{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {showContinue && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-auto mt-4 border-glow"
          onClick={() => onRoomComplete(roomData.id)}
        >
          Continue to Next Room
        </motion.button>
      )}
      <ItemBag items={inventory} onUseItem={handleUseItem} />
    </div>
  );
};

export default Room;
