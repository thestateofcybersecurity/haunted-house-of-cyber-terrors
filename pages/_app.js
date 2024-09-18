import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Progress from '../components/Progress';
import Inventory from '../components/Inventory';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [userProgress, setUserProgress] = useState({
    currentRoom: 0,
    collectedItems: [],
  });

  const router = useRouter();

  useEffect(() => {
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
  };

  const handleRoomComplete = async (roomId) => {
    if (roomId < 30) {
      router.push(`/room/${roomId + 1}`);
    } else {
      router.push('/completion');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-2xl font-bold">The Haunted House of Cyber Terrors</h1>
        <Progress currentRoom={userProgress.currentRoom} totalRooms={31} />
      </header>
      <main className="container mx-auto p-4 flex">
        <div className="w-3/4 pr-4">
          <Component 
            {...pageProps} 
            userProgress={userProgress}
            onCollectItem={handleCollectItem}
            onRoomComplete={handleRoomComplete}
          />
        </div>
        <div className="w-1/4">
          <Inventory items={userProgress.collectedItems} />
        </div>
      </main>
    </div>
  );
}

export default MyApp;
