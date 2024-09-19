import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Room from '../components/Room';
import { rooms } from '../lib/rooms';

export default function Home({ inventory, onUseItem, onRoomComplete, currentRoom = 0 }) {
  const router = useRouter();

  useEffect(() => {
    if (currentRoom > 0) {
      router.push(`/room/${currentRoom}`);
    }
  }, [currentRoom, router]);

  console.log('Home component received props:', { inventory, currentRoom });

  return (
    <Room 
      roomData={rooms[currentRoom]}
      inventory={inventory}
      onUseItem={onUseItem}
      onRoomComplete={onRoomComplete}
    />
  );
}
