import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Room from '../components/Room';
import { rooms } from '../lib/rooms';

export default function Home({ gameState, inventory, onUseItem, onRoomComplete }) {
  const router = useRouter();

  useEffect(() => {
    if (gameState && gameState.currentRoom > 0 && gameState.currentRoom < rooms.length) {
      router.push(`/room/${gameState.currentRoom}`);
    } else if (gameState && gameState.currentRoom >= rooms.length) {
      router.push('/completion');
    }
  }, [gameState, router]);

  if (!gameState || gameState.currentRoom !== 0) {
    return null;
  }

  return (
    <Room 
      roomData={rooms[0]}
      inventory={inventory}
      onUseItem={onUseItem}
      onRoomComplete={onRoomComplete}
    />
  );
}
