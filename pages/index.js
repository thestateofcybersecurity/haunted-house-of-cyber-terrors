import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Room from '../components/Room';
import { rooms } from '../lib/rooms';

export default function Home({ userProgress, onCollectItem, onRoomComplete }) {
  const router = useRouter();
  const introductionRoom = rooms[0];

  useEffect(() => {
    if (userProgress.currentRoom > 0) {
      router.push(`/room/${userProgress.currentRoom}`);
    }
  }, [userProgress.currentRoom, router]);

  return (
    <Room 
      roomData={introductionRoom}
      onCollectItem={onCollectItem}
      onRoomComplete={onRoomComplete}
      collectedItems={userProgress.collectedItems}
    />
  );
}
