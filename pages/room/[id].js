import { useRouter } from 'next/router';
import Room from '../../components/Room';
import { useGameContext } from '../../lib/gameContext';

export default function RoomPage({ onUseItem, onRoomComplete, restartGame }) {
  const router = useRouter();
  const { id } = router.query;
  const { rooms, gameState } = useGameContext();

  if (!gameState) {
    return <div>Loading...</div>;
  }

  const roomId = Number(id);
  
  if (roomId !== gameState.currentRoom) {
    router.push(`/room/${gameState.currentRoom}`);
    return null;
  }

  const roomData = rooms.find(r => r.id === roomId);

  if (!roomData) return <div>Room not found</div>;

  return (
    <Room 
      roomData={roomData}
      onUseItem={onUseItem}
      onRoomComplete={onRoomComplete}
      restartGame={restartGame}
    />
  );
}
