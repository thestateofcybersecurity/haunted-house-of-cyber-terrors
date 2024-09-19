import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Progress from '../components/Progress';
import IntroductionPage from '../components/IntroductionPage';
import { rooms } from '../lib/rooms';
import { useItem } from '../utils/itemUsage';

function MyApp({ Component, pageProps }) {
  const [gameState, setGameState] = useState({
    started: false,
    currentRoom: 0,
    inventory: [],
  });

  const router = useRouter();

  useEffect(() => {
    const fetchProgress = async () => {
      const res = await fetch('/api/getprogress?userId=user123');
      if (res.ok) {
        const progress = await res.json();
        setGameState(progress);
      }
    };
    fetchProgress();
  }, []);

  const handleStartGame = (selectedItems) => {
    const newState = {
      ...gameState,
      started: true,
      inventory: selectedItems,
    };
    setGameState(newState);
    saveProgress(newState);
  };

  const handleUseItem = (item, room) => {
    const result = useItem(item, room);
    return result;
  };

  const handleRemoveItem = (item) => {
    const newState = {
      ...gameState,
      inventory: gameState.inventory.filter(i => i.name !== item.name),
    };
    setGameState(newState);
    saveProgress(newState);
  };

  const handleRoomComplete = (roomId) => {
    const newState = {
      ...gameState,
      currentRoom: roomId + 1,
    };
    setGameState(newState);
    saveProgress(newState);

    if (roomId < rooms.length - 1) {
      router.push(`/room/${roomId + 1}`);
    } else {
      router.push('/completion');
    }
  };

  const saveProgress = async (progress) => {
    await fetch('/api/saveprogress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'user123', progress }),
    });
  };

  if (!gameState.started) {
    return <IntroductionPage items={rooms.flatMap(room => room.collectibleItems)} onStart={handleStartGame} />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-2">
        <h1 className="text-xl font-bold">The Haunted House of Cyber Terrors</h1>
        <Progress currentRoom={gameState.currentRoom} totalRooms={rooms.length} />
      </header>
      <main className="flex-grow overflow-hidden">
        <Component 
          {...pageProps} 
          gameState={gameState}
          onUseItem={handleUseItem}
          onRemoveItem={handleRemoveItem}
          onRoomComplete={handleRoomComplete}
        />
      </main>
    </div>
  );
}

export default MyApp;
