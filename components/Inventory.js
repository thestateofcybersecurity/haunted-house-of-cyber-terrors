import React from 'react';
import Image from 'next/image';

const Inventory = ({ items }) => {
  return (
    <div className="inventory bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-2">Inventory</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <div key={index} className="inventory-item">
            <Image 
              src={`/images/items/${item.image}`}
              alt={item.name}
              width={30}
              height={30}
            />
            <p className="text-xs mt-1">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
