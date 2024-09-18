import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Progress from '../components/Progress';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [userProgress, setUserProgress] = useState({
    currentRoom: 0,
    completedRooms: [],
    score: 0,
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

  const handleRoomCompletion = async (roomId) => {
    const newProgress = {
      ...userProgress,
      completedRooms: [...userProgress.completedRooms, roomId],
      currentRoom: roomId + 1,
      score: userProgress.score + 10,
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-2xl font-bold">The Haunted House of Cyber Terrors</h1>
        <Progress currentRoom={userProgress.currentRoom} totalRooms={31} />
      </header>
      <main className="container mx-auto p-4">
        <Component 
          {...pageProps} 
          userProgress={userProgress}
          onRoomComplete={handleRoomCompletion}
        />
      </main>
    </div>
  );
}

export default MyApp;
