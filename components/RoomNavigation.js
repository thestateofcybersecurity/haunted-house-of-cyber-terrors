import React from 'react';
import Link from 'next/link';
import { rooms } from '../lib/rooms';

const RoomNavigation = ({ userProgress }) => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {rooms.map((room, index) => (
          <li key={room.id}>
            <Link href={`/room/${room.id}`}>
              <a className={`text-sm ${index <= userProgress.currentRoom ? 'text-eerie-green' : 'text-gray-500'}`}>
                {room.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RoomNavigation;
