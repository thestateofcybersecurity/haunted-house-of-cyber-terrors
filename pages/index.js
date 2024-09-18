import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Room from '../components/Room';
import { rooms } from '../lib/rooms';

export default function Home() {
  const [userProgress, setUserProgress] = useState({
    currentRoom: 0,
    collectedItems: [],
  });

  const router = useRouter();

  useEffect(() => {
    // Fetch user progress from API
    const fetchProgress = async () => {
      const res = await fetch('/api/getprogress?userId=user123');
      if (res.ok) {
        const progress = await res.json();
        setUserProgress(progress);
      }
    };
    fetchProgress();
  }, []);

  const handleCollectItem = async (item) => {
    if (!userProgress.collectedItems.some(i => i.name === item.name)) {
      const newProgress = {
        ...userProgress,
        collectedItems: [...userProgress.collectedItems, item],
      };
      setUserProgress(newProgress);

      await fetch('/api/saveprogress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'user123', progress: newProgress }),
      });
    }
  };

  const handleRoomComplete = async (roomId) => {
    const newProgress = {
      ...userProgress,
      currentRoom: roomId + 1,
    };
    setUserProgress(newProgress);

    await fetch('/api/saveprogress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'user123', progress: newProgress }),
    });

    if (roomId < 30) {
      router.push(`/room/${roomId + 1}`);
    } else {
      router.push('/completion');
    }
  };

  const introductionRoom = rooms[0];  // Assuming the first room in the array is the introduction

  return (
    <Layout userProgress={userProgress}>
      <Room 
        roomData={introductionRoom}
        onCollectItem={handleCollectItem}
        onRoomComplete={handleRoomComplete}
        collectedItems={userProgress.collectedItems}
      />
    </Layout>
  );
}
