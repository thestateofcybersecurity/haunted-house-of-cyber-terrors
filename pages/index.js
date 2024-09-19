import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Room from '../components/Room';
import { rooms } from '../lib/rooms';

export default function Home({ inventory, onUseItem, onRoomComplete, currentRoom }) {
  const router = useRouter();

  useEffect(() => {
    if (currentRoom > 0 && currentRoom < rooms.length) {
      router.push(`/room/${currentRoom}`);
    } else if (currentRoom >= rooms.length) {
      router.push('/completion');
    }
  }, [currentRoom, router]);

  // Only render the first room if currentRoom is 0
  return currentRoom === 0 ? (
    <Room 
      roomData={rooms[0]}
      inventory={inventory}
      onUseItem={onUseItem}
      onRoomComplete={onRoomComplete}
    />
  ) : null;
}
