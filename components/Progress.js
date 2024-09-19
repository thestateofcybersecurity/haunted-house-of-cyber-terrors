import React from 'react';
import { motion } from 'framer-motion';

const Progress = ({ currentRoom, totalRooms }) => {
  const progress = ((currentRoom + 1) / totalRooms) * 100;

  return (
    <div className="w-full bg-gray-700 rounded-full h-4 dark:bg-gray-700">
      <motion.div 
        className="bg-purple-600 h-4 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
      <p className="text-sm text-gray-300 mt-2">
        Room {currentRoom + 1} of {totalRooms}
      </p>
    </div>
  );
};

export default Progress;
