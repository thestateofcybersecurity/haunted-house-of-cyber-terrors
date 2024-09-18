import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Inventory = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItemDetails = (item) => {
    setSelectedItem(selectedItem && selectedItem.name === item.name ? null : item);
  };

  return (
    <div className="inventory fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
      <div className="flex justify-center space-x-4">
        {items.map((item, index) => (
          <motion.div 
            key={index} 
            className="inventory-item cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => toggleItemDetails(item)}
          >
            <Image 
              src={`/images/items/${item.image}`}
              alt={item.name}
              width={40}
              height={40}
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="item-details mt-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h3 className="text-lg font-bold">{selectedItem.name}</h3>
            <p className="text-sm">{selectedItem.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Inventory;
