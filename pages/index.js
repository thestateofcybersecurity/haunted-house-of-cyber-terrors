import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Room from '../components/Room';
import { useGameContext } from '../lib/gameContext';

export default function Home({ onUseItem, onRoomComplete, restartGame }) {
  const router = useRouter();
  const { rooms, gameState } = useGameContext();

  useEffect(() => {
    if (gameState && gameState.currentRoom > 0) {
      router.push(`/room/${gameState.currentRoom}`);
    }
  }, [gameState, router]);

  if (!gameState || gameState.currentRoom !== 0) {
    return null;
  }

  return (
    <Room 
      roomData={rooms[0]}
      onUseItem={onUseItem}
      onRoomComplete={onRoomComplete}
      restartGame={restartGame}
    />
  );
}
