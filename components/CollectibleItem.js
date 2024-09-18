import React from 'react';
import Image from 'next/image';

const CollectibleItem = ({ item, onCollect, isCollected }) => {
  return (
    <div 
      className={`collectible-item cursor-pointer ${isCollected ? 'opacity-50' : ''}`}
      onClick={() => !isCollected && onCollect()}
    >
      <Image 
        src={`/images/items/${item.image}`}
        alt={item.name}
        width={50}
        height={50}
      />
      <p className="text-sm mt-2">{item.name}</p>
    </div>
  );
};

export default CollectibleItem;
