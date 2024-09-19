import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Progress from '../components/Progress';
import { rooms } from '../lib/rooms';
import { useItem } from '../utils/useItem';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [gameState, setGameState] = useState({
    currentRoom: 0,
    inventory: rooms.flatMap(room => room.collectibleItems), // Load all items initially
  });

  const router = useRouter();

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const res = await fetch('/api/getprogress?userId=user123');
        if (res.ok) {
          const progress = await res.json();
          setGameState(prevState => ({
            ...progress,
            inventory: prevState.inventory, // Keep the full inventory
          }));
        }
      } catch (error) {
        console.error('Failed to fetch progress:', error);
      }
    };
    fetchProgress();
  }, []);

  const handleUseItem = (item, roomData) => {
    const result = useItem(item, roomData);
    
    if (result.success) {
      const newInventory = gameState.inventory.filter(i => i.name !== item.name);
      const newState = { ...gameState, inventory: newInventory };
      setGameState(newState);
      saveProgress(newState);
    }

    return result;
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
    try {
      await fetch('/api/saveprogress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'user123', progress }),
      });
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-3xl font-bold mb-2 text-purple-300">The Haunted House of Cyber Terrors</h1>
        <Progress currentRoom={gameState.currentRoom} totalRooms={rooms.length} />
      </header>
      <main className="flex-grow overflow-hidden">
        <Component 
          {...pageProps} 
          roomData={rooms[gameState.currentRoom]}
          inventory={gameState.inventory}
          onUseItem={handleUseItem}
          onRoomComplete={handleRoomComplete}
        />
      </main>
    </div>
  );
}

export default MyApp;
