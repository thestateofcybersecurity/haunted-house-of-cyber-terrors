import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Room from '../components/Room';
import { rooms } from '../lib/rooms';

export default function Home({ inventory, onUseItem, onRoomComplete, currentRoom }) {
  const router = useRouter();

  useEffect(() => {
    if (currentRoom > 0) {
      router.push(`/room/${currentRoom}`);
    }
  }, [currentRoom, router]);

  return (
    <Room 
      roomData={rooms[0]}
      inventory={inventory}
      onUseItem={onUseItem}
      onRoomComplete={onRoomComplete}
    />
  );
}
