import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { rooms } from '../../lib/rooms';

export default function Room() {
  const router = useRouter();
  const { id } = router.query;
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
      completedRooms: [...userProgress.completedRooms, Number(id)],
      currentRoom: Number(id) + 1,
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

  if (!id) return null;

  const room = rooms.find(r => r.id === Number(id));
  if (!room) return <div>Room not found</div>;

  const RoomComponent = room.component;

  return (
    <Layout userProgress={userProgress}>
      <RoomComponent 
        onComplete={handleRoomCompletion}
        isCompleted={userProgress.completedRooms.includes(Number(id))}
      />
    </Layout>
  );
}
