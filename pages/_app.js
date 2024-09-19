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
      // Reset the game
      const resetProgress = { currentRoom: 0, collectedItems: [] };
      setUserProgress(resetProgress);
      await fetch('/api/saveprogress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'user123', progress: resetProgress }),
      });
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold">The Haunted House of Cyber Terrors</h1>
        <Progress currentRoom={userProgress.currentRoom} totalRooms={31} />
      </header>
      <main className="flex-grow overflow-y-auto">
        <Component 
          {...pageProps} 
          userProgress={userProgress}
          onCollectItem={handleCollectItem}
          onRoomComplete={handleRoomComplete}
        />
      </main>
      <footer className="bg-gray-800 sticky bottom-0 z-10">
        <Inventory items={userProgress.collectedItems} />
      </footer>
    </div>
  );
}

export default MyApp;
