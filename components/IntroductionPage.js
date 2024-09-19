import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const IntroductionPage = ({ items, onStart }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item) => {
    if (selectedItems.some(i => i.name === item.name)) {
      setSelectedItems(selectedItems.filter(i => i.name !== item.name));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Haunted House of Cyber Terrors</h1>
      <p className="mb-4 text-center">Select the items you think you'll need for your journey:</p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`p-2 border rounded cursor-pointer ${
              selectedItems.some(i => i.name === item.name) ? 'border-green-500' : 'border-gray-500'
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => toggleItem(item)}
          >
            <Image src={`/images/items/${item.image}`} alt={item.name} width={50} height={50} />
            <p className="mt-2 text-sm">{item.name}</p>
          </motion.div>
        ))}
      </div>
      <button
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onStart(selectedItems)}
      >
        Start Your Journey
      </button>
    </div>
  );
};

export default IntroductionPage;
