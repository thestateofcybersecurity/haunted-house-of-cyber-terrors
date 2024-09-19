import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Room from '../components/Room';
import { rooms } from '../lib/rooms';

export default function Home({ userProgress, onCollectItem, onRoomComplete }) {
  const router = useRouter();
  const currentRoom = userProgress?.currentRoom || 0;
  const inventory = userProgress?.inventory || [];

  useEffect(() => {
    if (userProgress && userProgress.currentRoom > 0) {
      router.push(`/room/${userProgress.currentRoom}`);
    }
  }, [userProgress, router]);

  return (
    <Room 
      roomData={rooms[currentRoom]}
      inventory={inventory}
      onCollectItem={onCollectItem}
      onRoomComplete={onRoomComplete}
    />
  );
}
