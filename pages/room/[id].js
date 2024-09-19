import { useRouter } from 'next/router';
import Room from '../../components/Room';
import { rooms } from '../../lib/rooms';

export default function RoomPage({ gameState, inventory, onUseItem, onRoomComplete, restartGame }) {
  const router = useRouter();
  const { id } = router.query;

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

  console.log('RoomPage received inventory:', inventory);

  return (
    <Room 
      roomData={roomData}
      inventory={inventory}
      onUseItem={onUseItem}
      onRoomComplete={onRoomComplete}
      restartGame={restartGame}
      currentRoom={gameState.currentRoom}
      rooms={rooms} // Add this line
    />
  );
}
