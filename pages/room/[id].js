import { useRouter } from 'next/router';
import Room from '../../components/Room';
import { rooms } from '../../lib/rooms';

export default function RoomPage({ userProgress, onCollectItem, onRoomComplete }) {
  const router = useRouter();
  const { id } = router.query;

  const roomData = rooms.find(r => r.id === Number(id));

  if (!roomData) return <div>Room not found</div>;

  return (
    <Room 
      roomData={roomData}
      onCollectItem={onCollectItem}
      onRoomComplete={onRoomComplete}
      collectedItems={userProgress.collectedItems}
    />
  );
}
