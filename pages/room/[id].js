import { useRouter } from 'next/router';
import Room from '../../components/Room';
import { rooms } from '../../lib/rooms';

export default function RoomPage({ inventory, onUseItem, onRoomComplete }) {
  const router = useRouter();
  const { id } = router.query;

  const roomData = rooms.find(r => r.id === Number(id));

  if (!roomData) return <div>Room not found</div>;

  console.log('RoomPage received inventory:', inventory);

  return (
    <Room 
      roomData={roomData}
      inventory={inventory}
      onUseItem={onUseItem}
      onRoomComplete={onRoomComplete}
    />
  );
}
