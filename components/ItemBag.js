import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ItemBag = ({ items, onUseItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    console.log('Items in bag:', items);
  }, [items]);

  const toggleBag = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    if (selectedItem && selectedItem.name === item.name) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  const handleUseItem = () => {
    if (selectedItem) {
      onUseItem(selectedItem);
      setSelectedItem(null);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button 
        onClick={toggleBag}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg border-glow"
      >
        {isOpen ? 'Close Bag' : 'Open Bag'}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-16 right-0 w-64 bg-gradient-haunted rounded-lg shadow-xl p-4 border-glow"
          >
            <h3 className="text-xl font-bold mb-2 text-purple-300 text-shadow-glow">Your Items ({items.length})</h3>
            <div className="grid grid-cols-3 gap-2">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  <Image 
                    src={`/images/items/${item.image}`}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-purple-300 hover:border-purple-500 transition-colors duration-200"
                  />
                </div>
              ))}
            </div>
            {selectedItem && (
              <div className="mt-4">
                <p className="text-sm text-green-200 mb-2 animate-flicker">{selectedItem.description}</p>
                <button
                  onClick={handleUseItem}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded text-sm border-glow"
                >
                  Use Item
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ItemBag;
