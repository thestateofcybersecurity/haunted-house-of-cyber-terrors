import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Introduction from '../components/rooms/Introduction';

export default function Home() {
  const [userProgress, setUserProgress] = useState({
    currentRoom: 0,
    completedRooms: [],
    score: 0,
  });

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

  const handleRoomCompletion = async () => {
    const newProgress = {
      ...userProgress,
      completedRooms: [...userProgress.completedRooms, 0],
      currentRoom: 1,
      score: userProgress.score + 10,
    };
    setUserProgress(newProgress);

    // Save progress to API
    await fetch('/api/saveprogress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'user123', progress: newProgress }),
    });
  };

  return (
    <Layout userProgress={userProgress}>
      <Introduction 
        onComplete={handleRoomCompletion}
        isCompleted={userProgress.completedRooms.includes(0)}
      />
    </Layout>
  );
}
